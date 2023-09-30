import { createSlice } from '@reduxjs/toolkit'

type AppState = {
  scroll: number
}

const initialState: AppState = {
  scroll: 0,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScroll(state, { payload }) {
      state.scroll = payload
    },
  },
})

const appReducer = appSlice.reducer

export { type AppState, appSlice, appReducer }
