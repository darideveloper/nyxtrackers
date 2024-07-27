import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hide } from '../features/buy_form_visible'
import { next, back } from '../features/buy_form_screen'
import BuyFormLogin from './buy_form_login'
import BuyFormSet from './buy_form_set'
import BuyFormCustomize from './buy_form_customize'
import BuyFormExtrasPromo from './buy_form_extras_promo'
import BuyFormShipping from './buy_form_shipping'
import BuyFormDone from './buy_form_done'
import FormBtn from '../components/form_btn'

export default function BuyForm() {

  const formElem = document.querySelector('.buy-form')
  
  const screens = {
    "Login to buy": <BuyFormLogin />,
    "Select a Set": <BuyFormSet />,
    "Customize your Set": <BuyFormCustomize />,
    "Extras and promo code": <BuyFormExtrasPromo />,
    "Shipping address": <BuyFormShipping />,
    "Done": <BuyFormDone />
  }
  

  const dispatch = useDispatch()
  const isFormVisible = useSelector(state => state.buyFormVisible.value)
  const formScreen = useSelector(state => state.buyFormScreen.value)

  return (
    <div
      className={`
        buy-form
        ${isFormVisible ? 'active' : ''}
      `}
    >
      <form
        id=""
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
              dispatch(hide())
            }}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
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
              dispatch(back())
            }}
          >
            Back
          </FormBtn>
          <FormBtn
            onClick={() => {
              dispatch(next())
            }}
          >
            Next
          </FormBtn>
         
        </div>

      </form>
    </div>
  )
}