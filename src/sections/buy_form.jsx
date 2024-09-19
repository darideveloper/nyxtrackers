import { useSelector, useDispatch } from 'react-redux'
import { hideForm, showForm } from '../features/buy_form_visible_slice'
import { nextScreen, backScreen, setNextText } from '../features/buy_form_screen_slice'
import { useEffect, useState } from 'react'

import BuyFormLogin from '../components/buy_form_screens/buy_form_login'
import BuyFormSet from '../components/buy_form_screens/buy_form_set'
import BuyFormCustomize from '../components/buy_form_screens/buy_form_customize'
import BuyFormExtrasPromo from '../components/buy_form_screens/buy_form_extras_promo'
import BuyFormShipping from '../components/buy_form_screens/buy_form_shipping'
import BuyFormDone from '../components/buy_form_screens/buy_form_done'
import FormBtn from '../components/form_btn'
import BuyFormPreview from '../components/buy_form_preview'
import BuyFormTotal from '../components/buy_form_total'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function BuyForm() {

  // redux hooks
  const dispatch = useDispatch()
  const isFormVisible = useSelector(state => state.buyFormVisible.value)
  const formScreen = useSelector(state => state.buyFormScreen.value)
  const formHasNext = useSelector(state => state.buyFormScreen.hasNext)
  const formHasBack = useSelector(state => state.buyFormScreen.hasBack)
  const nextText = useSelector(state => state.buyFormScreen.nextText)

  // States
  const [fullWithContent, setFullWithContent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Reuse functions
  function setFormMobile() {
    const formElem = document.querySelector('.buy-form > form')
    const screenHeight = window.innerHeight
    const formHeight = formElem.offsetHeight
    if (screenHeight < formHeight) {
      formElem.parentNode.classList.add('mobile')
    } else {
      formElem.parentNode.classList.remove('mobile')
    }
  }

  function startLoading() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const screens = {
    "Login to buy": <BuyFormLogin startLoading={startLoading} />,
    "Select a Set": <BuyFormSet />,
    "Customize your Set": <BuyFormCustomize />,
    "Extras and promo code": <BuyFormExtrasPromo />,
    "Shipping address": <BuyFormShipping />,
    "Done": <BuyFormDone />
  }

  // Render form if there is "#buy-form" in the URL
  useEffect(() => {
    if (window.location.hash === '#buy-form') {
      dispatch(showForm())
    }

    // Change form align when mobile
    window.addEventListener('resize', () => {
      setFormMobile()
    })

    // Set form align when component is mounted
    setFormMobile()

    // Show alerts if sale is done
    const urlParams = new URLSearchParams(window.location.search)
    const saleId = urlParams.get('sale-id')
    const saleStatus = urlParams.get('sale-status')
    console.log({saleId, saleStatus})

    if (saleId && saleStatus) {

      const MySwal = withReactContent(Swal)

      if (saleStatus == "success") {
        MySwal.fire({
          title: 'Payment Sucessful',
          text: `Your Order Number is ${saleId}`,
          footer: 'You will receive your sale updates in your email',
          icon: 'success',
          confirmButtonText: 'Ok',
        })
      } else {
        MySwal.fire({
          title: 'Payment Failed',
          text: `Something went wrong with your payment. Please try again later or contact us.`,
          footer: `Order number: ${saleId}`,
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
    }


  }, [])

  useEffect(() => {
    // Set full with content only to specific screens
    const fullWithSceens = ['Login to buy']
    if (fullWithSceens.includes(formScreen)) {
      setFullWithContent(true)
    } else {
      setFullWithContent(false)
    }

    // Update responsive form align
    setTimeout(() => {
      setFormMobile()
    }, 10)

    // Update next text in shipping screen
    if (formScreen === 'Shipping address') {
      dispatch(setNextText('Buy Now!'))
    } else {
      dispatch(setNextText('Next'))
    }

  }, [formScreen])

  return (
    <div
      className={`
        buy-form
        ${isFormVisible ? 'active' : ''}
      `}
    >
      <form
        className={`form ${isLoading ? 'loading' : ''}`}
      >

        <div className="header">
          <h2>
            {formScreen}
          </h2>
          <button
            className={`
              btn-close
            `}
            type="button"
            onClick={() => {
              dispatch(hideForm())
            }}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
            >
              <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero" />
            </svg>
          </button>
        </div>


        <div className={`content ${fullWithContent ? 'full-width' : ""}`}>
          {
            formScreen !== 'Login to buy'
            &&
            <div className="preview-wrapper">
              <BuyFormPreview />
              <BuyFormTotal />
            </div>
          }

          {/* Render current screen */}
          {screens[formScreen]}
        </div>

        <div className="buttons">
          <FormBtn
            onClick={() => {
              startLoading()
              setTimeout(() => {
                dispatch(backScreen())
              }, 500)
            }}
            disabled={!formHasBack}
          >
            Back
          </FormBtn>
          <FormBtn
            onClick={() => {
              startLoading()
              setTimeout(() => {
                dispatch(nextScreen())
              }, 500)
            }}
            disabled={!formHasNext}
          >
            {nextText}
          </FormBtn>

        </div>

      </form>
    </div>
  )
}