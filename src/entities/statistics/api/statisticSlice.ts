import { createSlice } from '@reduxjs/toolkit'
import { StatisticsResponse } from './types'

type StatisticState = {
  selectId: string
  selectItem: StatisticsResponse | null
}

const initialState: StatisticState = {
  selectId: '',
  selectItem: null,
}

const statisticSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectId(state, { payload }) {
      state.selectId = payload
    },
    setSelectItem(state, { payload }) {
      state.selectItem = payload
    },
  },
})

const statisticReducer = statisticSlice.reducer

export const { setSelectId, setSelectItem } = statisticSlice.actions

export { type StatisticState, statisticSlice, statisticReducer }
