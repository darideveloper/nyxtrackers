import { configureStore } from '@reduxjs/toolkit'
import { buyFormVisibleSlice } from '../features/buy_form_visible'
import { buyFormScreenSlice } from '../features/buy_form_screen'

export default configureStore({
  reducer: {
    buyFormVisible: buyFormVisibleSlice.reducer,
    buyFormScreen: buyFormScreenSlice.reducer,
  }
})