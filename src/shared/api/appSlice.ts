import { createSlice } from '@reduxjs/toolkit'

type AppState = {
  check: boolean
}

const initialState: AppState = {
  check: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCheck(state, { payload }) {
      state.check = payload
    },
  },
})

const appReducer = appSlice.reducer

export const { setCheck } = appSlice.actions

export { type AppState, appSlice, appReducer }
