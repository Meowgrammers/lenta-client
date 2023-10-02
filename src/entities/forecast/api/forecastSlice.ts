import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

type ForecastState = {
  week: number
  date: string
}

const initialState: ForecastState = {
  week: 2,
  date: dayjs().subtract(2, 'w').format('YYYY-MM-DD'),
}

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setWeek(state, { payload }) {
      state.week = payload
    },
    setDate(state, { payload }) {
      state.date = payload
    },
  },
})

const forecastReducer = forecastSlice.reducer

export const { setWeek, setDate } = forecastSlice.actions

export { type ForecastState, forecastSlice, forecastReducer }
