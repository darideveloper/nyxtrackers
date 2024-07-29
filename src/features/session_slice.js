import { createSlice } from '@reduxjs/toolkit'

// Show and hide the buy form
export const sessionSlice = createSlice({
  name: 'sessionUsername',
  initialState: {
    email: "",
    username: "",
  },
  reducers: {
    setSession: (state, action) => {
      state.email = action.payload.email
      state.username = action.payload.username
    },
    clearSession: (state) => {
      state.value = ""
      state.username = ""
    },
  }
})

// Action creators are generated for each case reducer function
export const { setSession, clearSession } = sessionSlice.actions

export default sessionSlice.reducer