import { useRef } from 'react'

import SetBtn from '../set_btn'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { setsOptions } from '../../api/buy_form'
import { useSelector } from 'react-redux'
import { setSelectedSet } from '../../features/buy_form_data_slice'
import { useDispatch } from 'react-redux'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { useEffect } from 'react'
import { submitEvent } from '../../libs/google-analytics'


export default function BuyFormSet() {

  const apiBase = import.meta.env.VITE_DASHBOARD_API
  const MySwal = withReactContent(Swal)

  // Refs
  const pendingOrdersValidated = useRef(false)

  // Redux  
  const dispatch = useDispatch()
  const selectedSet = useSelector(state => state.buyFormData.setSelected)
  const selectedColor = useSelector(state => state.buyFormData.colorSelected)
  const email = useSelector(state => state.buyFormData.email)

  useEffect(() => {
    // Enable next screen when load
    dispatch(setHasNext(true))

    if (pendingOrdersValidated.current) {
      return
    }

    // Validate if user already have a pending order
    const endpoint = `${apiBase}/store/pending-order/`
    const dataJson = JSON.stringify({
      "email": email,
    })
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataJson,
    })
    .then(response => response.json())
    .then(json_data => {
      if (json_data.data.has_pending_order) {
        
        // Show alert if user have a pending order
        MySwal.fire({
          "title": "You have a pending order",
          "text": "If you continue, your pending order will be canceled. Do you want to continue?",
          "icon": "warning",
          "showCancelButton": true,
          "confirmButtonText": "Create new order",
          "cancelButtonText": "Keep my pending order",
        })
        .then((result) => {
          if (result.isDismissed) {
            // Refresh page if user wants to keep pending order
            window.location.href = '/'
          }
        })
      }
    })

    pendingOrdersValidated.current = true

  }, [])

  return (
    <section
      className="set"
    >
      {
        setsOptions.map((set, index) => (
          <SetBtn
            key={index}
            name={set.name}
            color={selectedColor}
            points={set.points}
            price={set.price}
            recommended={set.recommended}
            selected={selectedSet.name === set.name}
            onClick={() => {
              dispatch(setSelectedSet(set))

              // Google Analytics
              submitEvent('select_set', set.name)
            }}
          />
        ))
      }
    </section>
  )
}