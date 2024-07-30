import { createSlice } from '@reduxjs/toolkit'

// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
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