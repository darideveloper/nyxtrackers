import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import InputImage from '../input_image'
import SelectColor from '../select_color'

import { setsColorsNumPrices, colorsOptions } from '../../api/buy_form'
import { useState, useEffect } from 'react'
import { setHasNext } from '../../features/buy_form_screen_slice'
import {
  setSelectedColor,
  setlogoColor1,
  setlogoColor2,
  setlogoColor3,
  setLogoUrl,
  setLogoFile,
  setColorsNum,
} from '../../features/buy_form_data_slice'
import { useDispatch, useSelector } from 'react-redux'
import { submitEvent } from '../../libs/google-analytics'


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
    // Reset logo if selected 1 color
    if (colorsNum.num == 1) {
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

  useEffect(() => {
    // Disable next button
    dispatch(setHasNext(false))
  }, [])

  useEffect(() => {
    // Enable next button when load valid logo or select single color
    if (logoUrl || colorsNum.num == 1) {
      dispatch(setHasNext(true))
    } else {
      dispatch(setHasNext(false))
    }
  }, [logoUrl, colorsNum])

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

          // Google Analytics
          submitEvent('select_colors_num', colorsNumPrice.num)
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
          onChange={(e) => {

            // Convert image to URL and raise error if not possible
            const file = e.target.files[0]
            let imageUrl = ""
            try {
              imageUrl = URL.createObjectURL(file)

              // Raise error if file is not an image
              if (!file.type.includes("image")) {
                throw new Error("Not an image")
              }

              // Raise error if invalid image format
              if (!["image/png", "image/svg+xml"].includes(file.type)) {
                throw new Error("Invalid image format")
              }

            } catch (error) {

              // Show error alert
              const MySwal = withReactContent(Swal)
              MySwal.fire({
                title: "Error uploading image",
                text: "Please try again with a valid image file (png, svg)",
                icon: "error",
                showConfirmButton: true,
              })

              // Delete image
              dispatch(setLogoUrl(""))
              e.target.value = null 

              // Quit function
              return  
            }

            // Save image url
            dispatch(setLogoUrl(imageUrl))

            // Save image in base64
            const reader = new FileReader()
            reader.onloadend = () => {
              const logoBase64 = reader.result
              dispatch(setLogoFile(logoBase64))
            }
            reader.readAsDataURL(file)
          }}
        />
      }

      {/* Render  */}
    </section>
  )
}