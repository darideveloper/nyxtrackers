import { createSlice } from '@reduxjs/toolkit'

// Show and hide the buy form
export const buyFormVisibleSlice = createSlice({
  name: 'buyFormVisible',
  initialState: {
    value: false,
  },
  reducers: {
    showForm: state => {
      state.value = true
    },
    hideForm: state => {
      state.value = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { showForm, hideForm } = buyFormVisibleSlice.actions

export default buyFormVisibleSlice.reducer