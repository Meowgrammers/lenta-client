import { createSlice } from '@reduxjs/toolkit'

type CategoriesState = {
  sort: string
  tableSearch: string
  selectId: number
  group: string[]
  categories: string[]
  subcategories: string[]
  skus: string[]
}

const initialState: CategoriesState = {
  sort: 'category',
  tableSearch: '',
  selectId: 1,
  group: [],
  categories: [],
  subcategories: [],
  skus: [],
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
    setCategory(state, { payload }) {
      state.categories.push(payload)
    },
    setSubcategory(state, { payload }) {
      state.subcategories.push(payload)
    },
    setSkus(state, { payload }) {
      state.skus.push(payload)
    },
    resetGroup(state, { payload }) {
      state.group = state.group.filter((item) => item !== payload)
    },
    resetCategory(state, { payload }) {
      state.categories = state.categories.filter((item) => item !== payload)
    },
    resetSubcategory(state, { payload }) {
      state.subcategories = state.subcategories.filter(
        (item) => item !== payload
      )
    },
    resetSkus(state, { payload }) {
      state.skus = state.skus.filter((item) => item !== payload)
    },
  },
})

const categoriesReducer = categoriesSlice.reducer

export const {
  setSearch,
  setSort,
  setSelectId,
  setGroup,
  setCategory,
  setSubcategory,
  setSkus,
  resetGroup,
  resetCategory,
  resetSubcategory,
  resetSkus,
} = categoriesSlice.actions

export { type CategoriesState, categoriesSlice, categoriesReducer }
