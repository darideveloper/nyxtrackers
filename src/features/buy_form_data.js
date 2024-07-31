import { createSlice } from '@reduxjs/toolkit'
import { setsOptions, colorsOptions } from '../api/buy_form'

// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
    set: setsOptions[2],
    setOptions: setsOptions,
    color: colorsOptions[0],
    colorOptions: colorsOptions,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
    setSet: (state, action) => {
      state.set = action.payload.set
    },
    setColor: (state, action) => {
      state.color = action.payload.color
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEmail, setSet, setColor } = buyFormDataSlice.actions

export default buyFormDataSlice.reducer