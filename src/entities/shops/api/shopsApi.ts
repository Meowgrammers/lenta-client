import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import { ShopRequest, ShopResponse } from './types'

export const shopsApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['SHOPS_DATA'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchShops: builder.query<ShopResponse, ShopRequest>({
        query: ({ page, limit }) => ({
          url: `${PATHS.SHOPS}`,
          params: { page, limit },
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'SHOPS_DATA', id: 'INFO' }],
        }),
      }),
    }),
  })

export const { useFetchShopsQuery } = shopsApi
