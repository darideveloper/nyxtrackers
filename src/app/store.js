import { configureStore } from '@reduxjs/toolkit'
import { buyFormVisibleSlice } from '../features/buy_form_visible_slice'
import { buyFormScreenSlice } from '../features/buy_form_screen_slice'
import { sessionSlice } from '../features/session_slice'

export default configureStore({
  reducer: {
    buyFormVisible: buyFormVisibleSlice.reducer,
    buyFormScreen: buyFormScreenSlice.reducer,
    session: sessionSlice.reducer,
  }
})