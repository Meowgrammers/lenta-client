import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import { SalesRequest, SalesResponse } from './types'

export const salesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['SALES_DATA'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchSales: builder.query<SalesResponse, SalesRequest>({
        query: () => ({
          url: PATHS.SALES,
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'SALES_DATA', id: 'INFO' }],
        }),
      }),
    }),
  })

export const { useFetchSalesQuery } = salesApi
