import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import { LoginRequest, LoginResponse, LogoutRequest } from './types'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: PATHS.LOGIN,
        method: HTTP_METHOD.POST,
        body: credentials,
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
    logout: builder.mutation<void, LogoutRequest>({
      query: (token) => ({
        url: PATHS.LOGOUT,
        method: HTTP_METHOD.POST,
        headers: {
          authorization: `token ${token}`,
        },
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = authApi
