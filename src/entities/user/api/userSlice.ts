import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '.'

type UserState = {
  isAuth: boolean
  token: string
}

const initialState = {
  isAuth: JSON.parse(sessionStorage.getItem('auth') || 'false'),
  token: JSON.parse(sessionStorage.getItem('token') || '""'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false
      state.token = ''
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true
        state.token = payload.auth_token
      }
    )
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.isAuth = false
      state.token = ''
    })
  },
})

const { logout } = userSlice.actions

const userReducer = userSlice.reducer

export { type UserState, userSlice, userReducer, logout }
