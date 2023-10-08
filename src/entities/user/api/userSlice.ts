import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '.'

type UserState = {
  isAuth: boolean
  token: string
}

const initialState = {
  isAuth: false,
  token: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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

const userReducer = userSlice.reducer

export { type UserState, userSlice, userReducer }
