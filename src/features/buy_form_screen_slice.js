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
  name: 'buyFormScreen',
  initialState: {
    value: screens[0],
    hasNext: true,
    hasBack: false,
    doneScreens: [],
  },
  reducers: {
    nextScreen: state => {

      // Save current screen as done
      state.doneScreens.push(state.value)

      // Move to next screen with
      const currentScreenIndex = screens.indexOf(state.value)
      const nextScreenIndex = currentScreenIndex + 1
      if (nextScreenIndex == screens.length) { 
        state.hasNext = false
        return
      }
      state.value = screens[nextScreenIndex]
      state.hasBack = true
    },
    backScreen: state => {

      // Move to previous screen
      const currentScreenIndex = screens.indexOf(state.value)
      const backScreenIndex = currentScreenIndex - 1
      if (backScreenIndex < 0) { 
        state.hasBack = false
        return
      }
      state.value = screens[backScreenIndex]
      state.hasNext = true
    },
  }
})


// Action creators are generated for each case reducer function
export const { nextScreen, backScreen } = buyFormScreenSlice.actions

export default buyFormScreenSlice.reducer