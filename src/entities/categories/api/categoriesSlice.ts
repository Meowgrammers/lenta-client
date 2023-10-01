import { createSlice } from '@reduxjs/toolkit'

type CategoriesState = {
  sort: string
  tableSearch: string
}

const initialState: CategoriesState = {
  sort: 'category',
  tableSearch: '',
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
  },
})

const categoriesReducer = categoriesSlice.reducer

export const { setSearch, setSort } = categoriesSlice.actions

export { type CategoriesState, categoriesSlice, categoriesReducer }
