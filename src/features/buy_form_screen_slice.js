import { createSlice } from '@reduxjs/toolkit'
import { screens, getHasNextBackScreen } from '../api/buy_form'

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
      
      // Validate if have next done screen
      const {hasNext, hasBack} = getHasNextBackScreen(state.value, state.doneScreens)
      state.hasNext = hasNext
      state.hasBack = hasBack
      
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

      // Validate if have next done screen
      const {hasNext, hasBack} = getHasNextBackScreen(state.value, state.doneScreens)
      state.hasNext = hasNext
      state.hasBack = hasBack
    },
    setHasNext: (state, action) => {
      state.hasNext = action.payload
    },
    setHasBack: (state, action) => {
      state.hasBack = action.payload
    },
  }
})


// Action creators are generated for each case reducer function
export const { nextScreen, backScreen, setHasNext, setHasBack } = buyFormScreenSlice.actions

export default buyFormScreenSlice.reducer