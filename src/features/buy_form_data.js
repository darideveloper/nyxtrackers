import { createSlice } from '@reduxjs/toolkit'
import { setsOptions, colorsOptions } from '../api/buy_form'


// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
    setSelected: setsOptions[2],
    colorSelected: colorsOptions[0],
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
    setSet: (state, action) => {
      state.setSelected = action.payload
    },
    setColor: (state, action) => {
      state.colorSelected = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEmail, setSet, setColor } = buyFormDataSlice.actions

export default buyFormDataSlice.reducer