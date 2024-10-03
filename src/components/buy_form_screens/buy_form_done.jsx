import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Spinner from '../spinner'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef  } from 'react'
import { setHasNext, setHasBack, setNextText } from '../../features/buy_form_screen_slice'
import { submitEvent } from '../../libs/google-analytics'


export default function BuyFormDone() {

  // Redux data
  const dispatch = useDispatch()
  const email = useSelector(state => state.buyFormData.email)
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const colorsNum = useSelector(state => state.buyFormData.colorsNum)
  const colorSelected = useSelector(state => state.buyFormData.colorSelected)
  const logoColor1 = useSelector(state => state.buyFormData.logoColor1)
  const logoColor2 = useSelector(state => state.buyFormData.logoColor2)
  const logoColor3 = useSelector(state => state.buyFormData.logoColor3)
  const logoFile = useSelector(state => state.buyFormData.logoFile)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)
  const promoCode = useSelector(state => state.buyFormData.promoCode)
  const promoDiscount = useSelector(state => state.buyFormData.promoDiscount)
  const fullName = useSelector(state => state.buyFormData.fullName)
  const country = useSelector(state => state.buyFormData.country)
  const state = useSelector(state => state.buyFormData.state)
  const city = useSelector(state => state.buyFormData.city)
  const postalCode = useSelector(state => state.buyFormData.postalCode)
  const streetAddress = useSelector(state => state.buyFormData.streetAddress)
  const phone = useSelector(state => state.buyFormData.phone)
  const total = useSelector(state => state.buyFormData.value)
  const comments = useSelector(state => state.buyFormData.comments)

  // Env variables
  const apiBase = import.meta.env.VITE_DASHBOARD_API

  // Alert mesages
  const alertsData = {
    "Sale saved": {
      title: "Thank you for your order!",
      text: "You will be redirected to the payment gateway. After the payment is confirmed, you will receive a confirmation email with the details of your trackers .",
      icon: "success",
      confirmButtonText: "Go to payment",
      onClick: (json_data) => {
        const stripeLink = json_data.data.stripe_link
        window.location.href = stripeLink
      },
    },
    "No stock available": {
      title: "Error",
      text: "There is no stock available. Please try again later.",
      icon: "error",
      confirmButtonText: "Go back",
      onClick: () => {
        window.location.reload()
      },
    },
    "Error": {
      title: "Error",
      text: "There was an error processing your order. Please try again later.",
      icon: "error",
      confirmButtonText: "Go back",
      onClick: () => {
        window.location.reload()
      },
    }
  }

  const isFirstRun = useRef(true)

  useEffect(() => {

    // Update buttons when load
    dispatch(setHasNext(false))
    dispatch(setHasBack(true))
    dispatch(setNextText("Loading..."))

    const includedExtrasNames = includedExtras.map(extra => extra.name)

    // Encode data
    const data = {
      "email": email,
      "set": setSelected.name,
      "colors_num": colorsNum.num,
      "set_color": colorSelected,
      "logo_color_1": logoColor1,
      "logo_color_2": logoColor2,
      "logo_color_3": logoColor3,
      "logo": logoFile,
      "included_extras": includedExtrasNames,
      "promo": {
        "code": promoCode ? promoCode : "no promo code",
        "discount": promoDiscount,
      },
      "full_name": fullName,
      "country": country,
      "state": state,
      "city": city,
      "postal_code": postalCode,
      "street_address": streetAddress,
      "phone": phone,
      "total": total,
      "comments": comments,
    }

    // Start sweetalert
    const MySwal = withReactContent(Swal)
    const dataJson = JSON.stringify(data)
    const endpoint = `${apiBase}/store/sale/`

    // Show specific alert
    async function showAlert(alertData, json_data) {
      const response = await MySwal.fire(alertData)
      if (response.isConfirmed) {
        alertData.onClick(json_data)
      }
    }

    // Send data to dashboard and render alerts
    async function sendData() {
      try {
        // Send sale data and get response
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: dataJson
        })

        // Get json data
        const json_data = await res.json()
        const message = json_data.message
        const alertData = alertsData[message]

        // Google Analytics
        submitEvent('sale_done', message)

        // Show alert
        showAlert(alertData, json_data)
      } catch (error) {
        // Show generic error alert
        showAlert(alertsData["Error"])  
        
        // Google Analytics
        submitEvent('sale_error')
      }
    }

    if (isFirstRun.current) {
      isFirstRun.current = false
      // Send main function
      sendData()
    }

    
  }, [])


  return (
    <section
      className="done"
    >
      <Spinner
        isLoading={true}
      />
    </section>
  )
}