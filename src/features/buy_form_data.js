import { createSlice } from '@reduxjs/toolkit'
import { 
  setsOptions,
  colorsOptions,
  setsColorsNumPrices,
} from '../api/buy_form'


// Show and hide the buy form
export const buyFormDataSlice = createSlice({
  name: 'buyFormData',
  initialState: {
    email: "",
    setSelected: setsOptions[2],
    colorSelected: colorsOptions[0],
    logoColor1: colorsOptions[1],
    logoColor2: colorsOptions[2],
    logoColor3: colorsOptions[3],
    logoUrl: "",
    colorsNum: setsColorsNumPrices[0],
    includedExtras: [],
    promoDiscount: 0
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setSelectedSet: (state, action) => {
      state.setSelected = action.payload
    },
    setSelectedColor: (state, action) => {
      state.colorSelected = action.payload
    },
    setlogoColor1: (state, action) => {
      state.logoColor1 = action.payload
    },
    setlogoColor2: (state, action) => {
      state.logoColor2 = action.payload
    },
    setlogoColor3: (state, action) => {
      state.logoColor3 = action.payload
    },
    setLogoUrl: (state, action) => {
      state.logoUrl = action.payload
    },
    setColorsNum: (state, action) => {
      state.colorsNum = action.payload
    },
    setIncludedExtras: (state, action) => {
      state.includedExtras = action.payload
    },
    setPromoDiscount: (state, action) => {
      state.promoDiscount = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  setEmail,
  setSelectedSet,
  setSelectedColor,
  setlogoColor1,
  setlogoColor2,
  setlogoColor3,
  setLogoUrl,
  setColorsNum,
  setIncludedExtras,
  setPromoDiscount,
} = buyFormDataSlice.actions

export default buyFormDataSlice.reducer