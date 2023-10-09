import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PATHS } from '../constants'

export const baseQuery = fetchBaseQuery({
  baseUrl: `${PATHS.BASE}`,
  prepareHeaders(headers) {
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['USER_INFO'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
