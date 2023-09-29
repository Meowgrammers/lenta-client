import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import {
  ForecastPostRequest,
  ForecastPostResponse,
  ForecastRequest,
  ForecastResponse,
} from './types'

export const forecastApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['FORECAST_DATA'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchForecast: builder.query<ForecastResponse, ForecastRequest>({
        query: ({ page, limit }) => ({
          url: `${PATHS.FORECAST}?page=${page}&limit=${limit}`,
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'FORECAST_DATA', id: 'INFO' }],
        }),
      }),
      addForecast: builder.mutation<ForecastPostResponse, ForecastPostRequest>({
        query: (credentials) => ({
          url: PATHS.FORECAST,
          method: HTTP_METHOD.POST,
          body: credentials,
          providesTags: [{ type: 'FORECAST_DATA', id: 'INFO' }],
        }),
      }),
    }),
  })

export const { useAddForecastMutation, useFetchForecastQuery } = forecastApi
