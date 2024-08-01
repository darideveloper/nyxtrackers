import { setsColorNumPrices, colorsOptions } from '../../api/buy_form'
import { useState, useEffect } from 'react'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { setColors } from '../../features/buy_form_data'
import { useDispatch } from 'react-redux'
import Select from 'react-select'


export default function BuyFormCustomize() {

  // Internal state
  const [colorsNum, setcolorsNum] = useState(0)
  const [selectColor1, setSelectColor1] = useState("")
  const [selectColor2, setSelectColor2] = useState("")
  const [selectColor3, setSelectColor3] = useState("")
  const [selectColor4, setSelectColor4] = useState("")
  const colorsStates = [
    {
      state: selectColor1,
      set: setSelectColor1
    },
    {
      state: selectColor2,
      set: setSelectColor2
    },
    {
      state: selectColor3,
      set: setSelectColor3
    },
    {
      state: selectColor4,
      set: setSelectColor4
    }
  ]

  // Redux
  const dispatch = useDispatch()

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
    let colorsFilled = colorsStates.filter(color => color.state !== "").length
    console.log({colorsFilled, colorsNum})
    if (colorsFilled >= colorsNum && colorsNum > 0) {
      
      // Enable next button
      dispatch(setHasNext(true))

      // Save in redux selected colors
      dispatch(setColors(colorsStates.map(color => color.state)))

    } else {
      // Disable next button
      dispatch(setHasNext(false))
    }


  }, [colorsNum, selectColor1, selectColor2, selectColor3, selectColor4])

  return (
    <section
      className="customize"
    >
      {/* Render colors num selector */}
      <Select
        options={optionsNumColors}
        className='select numColors'
        value={optionsNumColors.find(color => color.value === colorsNum)}
        onChange={(e) => {
          setcolorsNum(e.value)
        }}
      />

      <div className="colors">
        {
          [...Array(colorsNum)].map((_, index) => (
            <Select
              key={index}
              className={`select small color color-${index} ${colorsStates[index].state}`}
              value={optionsColorsSet.find(color => color.value === colorsStates[index].state)}
              options={optionsColorsSet}
              onChange={(e) => {
                colorsStates[index].set(e.value)              
              }}
            />
          ))
        }
      </div>



      {/* Render  */}
    </section>
  )
}