import { createSlice } from '@reduxjs/toolkit'
import { StatisticsExtendedResponse, StatisticsResponse } from './types'

type StatisticState = {
  selectId: string
  selectItem: StatisticsResponse | null
  selectExItem: StatisticsExtendedResponse | null
}

const initialState: StatisticState = {
  selectId: '',
  selectItem: null,
  selectExItem: null,
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
    setExItem(state, { payload }) {
      state.selectExItem = payload
    },
  },
})

const statisticReducer = statisticSlice.reducer

export const { setSelectId, setSelectItem, setExItem } = statisticSlice.actions

export { type StatisticState, statisticSlice, statisticReducer }
