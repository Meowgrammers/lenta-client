import { createSlice } from '@reduxjs/toolkit'
import { shopsApi } from '.'

type ShopsState = {
  searchTerm: string
  selectedItems: string[]
  allItems: string[]
}

const initialState: ShopsState = {
  searchTerm: '',
  selectedItems: [],
  allItems: [],
}

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addSelectedItem(state, action) {
      state.selectedItems.push(action.payload)
    },
    addAllItems(state, { payload }) {
      state.selectedItems = payload
    },
    removeSelectedItem(state, action) {
      state.selectedItems = state.selectedItems.filter(
        (item) => item !== action.payload
      )
    },
    resetSelectedItems(state) {
      state.selectedItems = []
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      shopsApi.endpoints.fetchShops.matchFulfilled,
      (state, { payload }) => {
        state.allItems = payload.results.map((item) => item.store)
      }
    )
  },
})

const shopsReducer = shopsSlice.reducer

export const {
  setSearchTerm,
  addSelectedItem,
  removeSelectedItem,
  resetSelectedItems,
  addAllItems,
} = shopsSlice.actions
export { type ShopsState, shopsSlice, shopsReducer }
