import { createSlice } from '@reduxjs/toolkit'

const screens = [
  "Login to buy",
  "Select a Set",
  "Customize your Set",
  "Extras and promo code",
  "Shipping address",
  "Done",
]

// Manage the current screen in the buy form
export const buyFormScreenSlice = createSlice({
  name: 'buy_form_screen',
  initialState: {
    value: screens[0],
  },
  reducers: {
    next: state => {
      const currentScreenIndex = screens.indexOf(state.value)
      if (currentScreenIndex == 0) { return }
      state.value = screens[currentScreenIndex + 1]
    },
    back: state => {
      const currentScreenIndex = screens.indexOf(state.value)
      if (currentScreenIndex == screens.length - 1) { return }
      state.value = screens[currentScreenIndex - 1]
    },
  }
})


// Action creators are generated for each case reducer function
export const { next, back } = buyFormScreenSlice.actions

export default buyFormScreenSlice.reducer