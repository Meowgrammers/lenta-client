import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducer'
import { baseApi } from '../../shared'
import {
  authApi,
  categoriesApi,
  forecastApi,
  salesApi,
  shopsApi,
} from '@/entities'

const saveToSessionStorage = (state: RootState) => {
  try {
    sessionStorage.setItem('auth', JSON.stringify(state.user.isAuth))
    sessionStorage.setItem('token', JSON.stringify(state.user.token))
  } catch (e) {
    console.error(e)
  }
}

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        baseApi.middleware,
        authApi.middleware,
        categoriesApi.middleware,
        forecastApi.middleware,
        salesApi.middleware,
        shopsApi.middleware
      ),
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const dispatch = store.dispatch

store.subscribe(() => {
  saveToSessionStorage(store.getState())
})
