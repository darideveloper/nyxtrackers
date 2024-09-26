import Input from '../input'
import InputCheckbox from '../input_checkbox'
import Spinner from '../spinner'
import FormBtn from '../form_btn'

import { extras } from '../../api/buy_form'
import { getPromoCodeDiscount } from '../../api/promo_code'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  setIncludedExtras,
  setPromoDiscount,
  setPromoCode,
} from '../../features/buy_form_data_slice'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { useDispatch } from 'react-redux'

export default function BuyFormExtrasPromo() {

  // Redux
  const dispatch = useDispatch()
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)
  const promoDiscount = useSelector(state => state.buyFormData.promoDiscount)
  const promoCode = useSelector(state => state.buyFormData.promoCode)


  // Filter extras
  const extrasFiltered = extras.filter(extra => !extra.exclude_sets.includes(setSelected.name))

  // Initial state
  const [isLoading, setIsLoading] = useState(false)
  const [isValidated, setIsValidated] = useState(false)

  useEffect(() => {
    // Enable next button when load
    dispatch(setHasNext(true))
  }, [])

  return (
    <div className="extras-promo">
      <h2>Extras</h2>
      <div className="extras-wrapper">

        {extrasFiltered.map((extra, index) => (
          <InputCheckbox
            key={index}
            label={`${extra.name} (+${extra.price}USD)`}
            checked={includedExtras.includes(extra)}
            onChange={(e) => {
              if (e.target.checked) {
                // Add extra when unchecked
                dispatch(setIncludedExtras([...includedExtras, extra]))
              } else {
                // Remove extra when checked
                dispatch(setIncludedExtras(includedExtras.filter(e => e !== extra)))
              }
            }}
          />
        ))}
      </div>

      <h2>Promo code</h2>
      <Input
        type='text'
        name='promo'
        placeholder='Enter your promo code'
        value={promoCode}
        onChange={(e) => {

          // Save promo code in local state
          dispatch(setPromoCode(e.target.value))

        }}
      />

      <div className="message">
        <Spinner
          isLoading={isLoading}
          small={true}
        />


        {
          !isLoading && isValidated && promoCode != ""
          &&
          (
            promoDiscount["value"] > 0
              ?
              <p>{`Promo code applied: -${promoDiscount["value"]} USD`}</p>
              :
              <p className='invalid'>Invalid promo code</p>

          )
        }
      </div>

      <FormBtn
        className="no-margin-x"
        disabled={promoCode == ""}
        onClick={() => {

          // Set validation state
          setIsValidated(true)

          // Show spinner
          setIsLoading(true)

          // Save promo discount in redux state
          getPromoCodeDiscount(promoCode)
            .then(promoCodeDiscount => {
              dispatch(setPromoDiscount(promoCodeDiscount))

              // Hide spinner
              setTimeout(() => setIsLoading(false), 500)
            })
        }}
      >
        Validate
      </FormBtn>

    </div>
  )
}