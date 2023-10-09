import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import {
  StatisticsExtendedRequest,
  StatisticsExtendedResponse,
  StatisticsRequest,
  StatisticsResponse,
} from './types'

export const statisticApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['STATISTICS_DATA', 'STATISTICS_EXTEND_DATA'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchStatistics: builder.query<StatisticsResponse, StatisticsRequest>({
        query: ({ sku, group, category, subcategory, page, limit }) => ({
          url: `${PATHS.STATISTICS}`,
          params: { sku, group, category, subcategory, page, limit },
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'STATISTICS_DATA', id: 'INFO' }],
        }),
      }),
      fetchStatisticsExtended: builder.query<
        StatisticsExtendedResponse,
        StatisticsExtendedRequest
      >({
        query: ({ sku, group, category, subcategory, page, limit }) => ({
          url: `${PATHS.STATISTICS_EXTENDED}`,
          params: { sku, group, category, subcategory, page, limit },
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'STATISTICS_EXTEND_DATA', id: 'INFO' }],
        }),
      }),
    }),
  })

export const { useFetchStatisticsQuery, useFetchStatisticsExtendedQuery } =
  statisticApi
