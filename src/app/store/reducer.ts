import { combineReducers } from '@reduxjs/toolkit'
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState'
import {
  authApi,
  categoriesApi,
  forecastApi,
  salesApi,
  shopsApi,
} from '@/entities'
import { baseApi } from '@/shared'

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>
  authApi: CombinedState<Record<never, never>, 'USER_INFO', 'authApi'>
  categoriesApi: CombinedState<
    Record<never, never>,
    'CATEGORIES_DATA',
    'categoriesApi'
  >
  salesApi: CombinedState<Record<never, never>, 'SALES_DATA', 'salesApi'>
  forecastApi: CombinedState<
    Record<never, never>,
    'FORECAST_DATA',
    'forecastApi'
  >
  shopsApi: CombinedState<Record<never, never>, 'SHOPS_DATA', 'shopsApi'>
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  authApi: authApi.reducer,
  categoriesApi: categoriesApi.reducer,
  salesApi: salesApi.reducer,
  forecastApi: forecastApi.reducer,
  shopsApi: shopsApi.reducer,
})
