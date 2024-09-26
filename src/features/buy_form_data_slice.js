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
    logoFile: "",
    colorsNum: setsColorsNumPrices[1],
    includedExtras: [],
    promoDiscount: { type: "amount", value: 0 },
    promoCode: '',
    fullName: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    phone: '',
    total:  setsOptions[2].price,
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
    setLogoFile: (state, action) => {
      state.logoFile = action.payload
    },
    setColorsNum: (state, action) => {
      state.colorsNum = action.payload
    },
    setIncludedExtras: (state, action) => {
      state.includedExtras = action.payload
    },
    setPromoDiscount: (state, action) => {
      state.promoDiscount = action.payload
    },
    setPromoCode: (state, action) => {
      state.promoCode = action.payload
    },
    setFullName: (state, action) => {
      state.fullName = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setState: (state, action) => {
      state.state = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload
    },
    setStreetAddress: (state, action) => {
      state.streetAddress = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    updateTotal: (state, action) => {

      // Calculate subtotal
      const setPrice = state.setSelected.price
      const colorsNumPrice = state.colorsNum.price
      const extrasPrice = state.includedExtras.reduce((acc, extra) => acc + extra.price, 0)
      const subtotal = setPrice + colorsNumPrice + extrasPrice

      // Calculate discount
      if (state.promoDiscount.type === "amount") {
        state.total = subtotal - state.promoDiscount.value
      } else if (state.promoDiscount.type === "percentage") {
        state.total = subtotal - (subtotal * state.promoDiscount.value / 100)
      }
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
  setLogoFile,
  setColorsNum,
  setIncludedExtras,
  setPromoDiscount,
  setPromoCode,
  setFullName,
  setCountry,
  setState,
  setCity,
  setPostalCode,
  setStreetAddress,
  setPhone,
  updateTotal,
} = buyFormDataSlice.actions

export default buyFormDataSlice.reducer