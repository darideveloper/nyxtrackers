import { createSlice } from '@reduxjs/toolkit'
import { setsOptions, colorsOptions } from '../api/buy_form'


// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
    setSelected: setsOptions[2],
    colorsSelected: [colorsOptions[0]],
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
    setSet: (state, action) => {
      state.setSelected = action.payload
    },
    setColors: (state, action) => {
      state.colorsSelected = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setEmail, setSet, setColors } = buyFormDataSlice.actions

export default buyFormDataSlice.reducer