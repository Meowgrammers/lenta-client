import { createSlice } from '@reduxjs/toolkit'

type ShopsState = {
  searchTerm: string
  selectedItems: string[]
}

const initialState: ShopsState = {
  searchTerm: '',
  selectedItems: [],
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
    removeSelectedItem(state, action) {
      state.selectedItems = state.selectedItems.filter(
        (item) => item !== action.payload
      )
    },
    resetSelectedItems(state) {
      state.selectedItems = []
    },
  },
})

const shopsReducer = shopsSlice.reducer

export const {
  setSearchTerm,
  addSelectedItem,
  removeSelectedItem,
  resetSelectedItems,
} = shopsSlice.actions
export { type ShopsState, shopsSlice, shopsReducer }
