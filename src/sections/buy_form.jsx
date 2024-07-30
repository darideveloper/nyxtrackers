import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideForm } from '../features/buy_form_visible_slice'
import { nextScreen, backScreen } from '../features/buy_form_screen_slice'
import BuyFormLogin from '../components/buy_form_screens/buy_form_login'
import BuyFormSet from '../components/buy_form_screens/buy_form_set'
import BuyFormCustomize from '../components/buy_form_screens/buy_form_customize'
import BuyFormExtrasPromo from '../components/buy_form_screens/buy_form_extras_promo'
import BuyFormShipping from '../components/buy_form_screens/buy_form_shipping'
import BuyFormDone from '../components/buy_form_screens/buy_form_done'
import FormBtn from '../components/form_btn'

export default function BuyForm() {
  
  // local state
  const [currentFormFilled, setCurrentFormFilled] = useState(false)
 
  const screens = {
    "Login to buy": <BuyFormLogin setFilled={setCurrentFormFilled} />,
    "Select a Set": <BuyFormSet setFilled={setCurrentFormFilled} />,
    "Customize your Set": <BuyFormCustomize setFilled={setCurrentFormFilled} />,
    "Extras and promo code": <BuyFormExtrasPromo setFilled={setCurrentFormFilled} />,
    "Shipping address": <BuyFormShipping setFilled={setCurrentFormFilled} />,
    "Done": <BuyFormDone setFilled={setCurrentFormFilled} />
  }
  

  // redux hooks
  const dispatch = useDispatch()
  const isFormVisible = useSelector(state => state.buyFormVisible.value)
  const formScreen = useSelector(state => state.buyFormScreen.value)
  const formHasNext = useSelector(state => state.buyFormScreen.hasNext)
  const formHasBack = useSelector(state => state.buyFormScreen.hasBack)


  return (
    <div
      className={`
        buy-form
        ${isFormVisible ? 'active' : ''}
      `}
    >
      <form>
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

        <div className="content">
          {/* Render current screen */}
          {screens[formScreen]}
        </div>

        <div className="buttons">
          <FormBtn
            onClick={() => {
              dispatch(backScreen())
            }}
            disabled={!formHasBack}
          >
            Back
          </FormBtn>
          <FormBtn
            onClick={() => {
              dispatch(nextScreen())
            }}
            disabled={!formHasNext || !currentFormFilled}
          >
            Next
          </FormBtn>
         
        </div>

      </form>
    </div>
  )
}