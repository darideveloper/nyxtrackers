import { createSlice } from '@reduxjs/toolkit'

export const setsOptions = [
  {
    "name": "basic",
    "points": 5,
    "price": 275,
    "recommended": false,
  },
  {
    "name": "standard",
    "points": 6,
    "price": 295,
    "recommended": false,
  },
  {
    "name": "enhanced",
    "points": 8,
    "price": 335,
    "recommended": true,
  },
  {
    "name": "elite",
    "points": 10,
    "price": 460,
    "recommended": false,
  },
]

export const colorsOptions = [
  "blue",
  "white",
  "grey",
  "green",
  "yellow",
  "orange",
  "red",
  "pink",
  "purple",
  "black",
]

// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
    set: setsOptions[2],
    color: colorsOptions[0]
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
  }
})

// Action creators are generated for each case reducer function
export const { setEmail } = buyFormDataSlice.actions

export default buyFormDataSlice.reducer