import { setsColorNumPrices, colorsOptions } from '../../api/buy_form'
import { useState, useEffect } from 'react'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { 
  setSelectedColor,
  setlogoColor1,
  setlogoColor2, 
  setlogoColor3,
  setLogoUrl
} from '../../features/buy_form_data'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import InputImage from '../input-image'
import SelectColor from '../select_color'

export default function BuyFormCustomize() {

  // Internal state
  const [imageSrc, setImageSrc] = useState(null)
  const [colorsNum, setSelectedColorsNum] = useState(0)  

  // Redux states
  const dispatch = useDispatch()
  const colorSelected = useSelector(state => state.buyFormData.colorSelected)
  const logoColor1 = useSelector(state => state.buyFormData.logoColor1)
  const logoColor2 = useSelector(state => state.buyFormData.logoColor2)
  const logoColor3 = useSelector(state => state.buyFormData.logoColor3)
  const logoUrl = useSelector(state => state.buyFormData.logoUrl)

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

  // Colors num options
  const optionsNumColors = [
    {
      "label": "Select the number of colors",
      "value": 0
    },
    ...setsColorNumPrices.map(color => ({
      label: color.details,
      value: color.colorsNum
    }))
  ]

  // Colors options
  const optionsColorsSet = colorsOptions.map(color => ({
    label: color,
    value: color
  }))

  useEffect(() => {
    // Enable next button when required fields are filled
    let colorsFilled = colorsStatesData.filter(color => color.state !== "").length
    console.log({colorsFilled, colorsNum})
    if (colorsFilled >= colorsNum && colorsNum > 0) {
      
      // Enable next button
      dispatch(setHasNext(true))

    } else {
      // Disable next button
      dispatch(setHasNext(false))
    }


  }, [colorsNum, setSelectedColor, logoColor1, logoColor2, logoColor3])

  return (
    <section
      className="customize"
    >
      {/* Logo image */}
      <InputImage 
        name="user-logo"
        label={"Upload your logo"}
        warning={"Care to use .png without background / .svg !"}
        imageSrc={imageSrc}
        onChange={(imageUrl) => {
          // Save image in local state
          setImageSrc(imageUrl)

          // Save in redux
        }}
      />

      {/* Render colors num selector */}
      <Select
        options={optionsNumColors}
        className='select numColors'
        value={optionsNumColors.find(color => color.value === colorsNum)}
        onChange={(e) => {
          setSelectedColorsNum(e.value)
        }}
      />

      {/* <Select
        key={index}
        className={`select small color color-${index} ${colorsStatesData[index].state}`}
        value={optionsColorsSet.find(color => color.value === colorsStatesData[index].state)}
        options={optionsColorsSet}
        onChange={(e) => {
          const setFunc = colorsStatesData[index].set
          dispatch(setFunc(e.value))              
        }}
      /> */}
      
      <div className="colors">
        {
          [...Array(colorsNum)].map((_, index) => (

            <SelectColor 
              key={index}
              value={colorsStatesData[index].state}
              label={colorsStatesData[index].label}
              index={index}
              options={optionsColorsSet}
              onChange={(e) => {
                console.log({colorsStatesData})
                const setFunc = colorsStatesData[index].set
                dispatch(setFunc(e.value))              
              }}
            />
          ))
        }
      </div>



      {/* Render  */}
    </section>
  )
}