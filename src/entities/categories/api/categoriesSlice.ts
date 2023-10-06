import { createSlice } from '@reduxjs/toolkit'

type CategoriesState = {
  sort: string
  tableSearch: string
  selectId: number
  group: string[]
}

const initialState: CategoriesState = {
  sort: 'category',
  tableSearch: '',
  selectId: 1,
  group: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSort(state, { payload }) {
      state.sort = payload
    },
    setSearch(state, { payload }) {
      state.tableSearch = payload
    },
    setSelectId(state, { payload }) {
      state.selectId = payload
    },
    setGroup(state, { payload }) {
      state.group.push(payload)
    },
  },
})

const categoriesReducer = categoriesSlice.reducer

export const { setSearch, setSort, setSelectId } = categoriesSlice.actions

export { type CategoriesState, categoriesSlice, categoriesReducer }
