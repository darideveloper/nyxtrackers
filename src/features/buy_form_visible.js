import { createSlice } from '@reduxjs/toolkit'

// Show and hide the buy form
export const buyFormVisibleSlice = createSlice({
  name: 'buy_form_visible',
  initialState: {
    value: false,
  },
  reducers: {
    show: state => {
      state.value = true
    },
    hide: state => {
      state.value = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { show, hide } = buyFormVisibleSlice.actions

export default buyFormVisibleSlice.reducer