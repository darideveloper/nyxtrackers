import { setsColorsNumPrices, colorsOptions } from '../../api/buy_form'
import { useState, useEffect } from 'react'
import { setHasNext } from '../../features/buy_form_screen_slice'
import {
  setSelectedColor,
  setlogoColor1,
  setlogoColor2,
  setlogoColor3,
  setLogoUrl,
  setColorsNum
} from '../../features/buy_form_data'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import InputImage from '../input-image'
import SelectColor from '../select_color'

export default function BuyFormCustomize() {

  // Internal state
  const [warning, setWarning] = useState("")

  // Redux states
  const dispatch = useDispatch()
  const colorSelected = useSelector(state => state.buyFormData.colorSelected)
  const logoColor1 = useSelector(state => state.buyFormData.logoColor1)
  const logoColor2 = useSelector(state => state.buyFormData.logoColor2)
  const logoColor3 = useSelector(state => state.buyFormData.logoColor3)
  const logoUrl = useSelector(state => state.buyFormData.logoUrl)
  const colorsNum = useSelector(state => state.buyFormData.colorsNum)

  const colorsStatesData = [
    {
      label: "Tracker color",
      state: colorSelected,
      set: setSelectedColor
    },
    {
      label: "Primary Logo color",
      state: logoColor1,
      set: setlogoColor1
    },
    {
      label: "Secondary Logo color",
      state: logoColor2,
      set: setlogoColor2
    },
    {
      label: "Tertiary Logo color",
      state: logoColor3,
      set: setlogoColor3
    }
  ]

  // Colors num options for select 
  const optionsNumColors = setsColorsNumPrices.map(color => ({
    label: color.details,
    value: color.num
  }))


  // Colors options for select
  const optionsColorsSet = colorsOptions.map(color => ({
    label: color,
    value: color
  }))

  useEffect(() => {
    // Enable next button when required fields are filled
    if (colorsNum.num > 0) {
      // Enable next button
      dispatch(setHasNext(true))
    } else {
      // Disable next button
      dispatch(setHasNext(false))

      // Delete logo image
      dispatch(setLogoUrl(""))
    }

    // Update warning
    if (colorsNum.num > 2) {
      setWarning("Warning: Select your logo colors carefully, they will be printed as they are.")
    } else {
      setWarning("")
    }


  }, [colorsNum, setSelectedColor, logoColor1, logoColor2, logoColor3])

  return (
    <section
      className="customize"
    >

      {/* Render colors num selector */}
      <Select
        options={optionsNumColors}
        className='select numColors'
        value={{ label: colorsNum.details, value: colorsNum.num }}
        onChange={(e) => {
          const colorsNumPrice = setsColorsNumPrices.find(color => color.num === e.value)
          dispatch(setColorsNum(colorsNumPrice))
        }}
      />

      <p className='warning'>
        {warning}
      </p>

      <div className="colors">
        {
          [...Array(colorsNum.num)].map((_, index) => (

            <SelectColor
              key={index}
              value={colorsStatesData[index].state}
              label={colorsStatesData[index].label}
              index={index}
              options={optionsColorsSet}
              onChange={(e) => {
                const setFunc = colorsStatesData[index].set
                dispatch(setFunc(e.value))
              }}
            />
          ))
        }
      </div>

      {/* Logo image */}
      {
        colorsNum.num > 1
        &&
        <InputImage
          name="user-logo"
          label={"Upload your logo"}
          warning={"Care to use .png without background / .svg !"}
          imageSrc={logoUrl}
          onChange={(imageUrl) => {
            // Save in redux
            dispatch(setLogoUrl(imageUrl))
          }}
        />
      }

      {/* Render  */}
    </section>
  )
}