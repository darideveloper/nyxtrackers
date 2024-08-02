import Input from '../input'
import InputCheckbox from '../input_checkbox'
import { extras } from '../../api/buy_form'
import { getPromoCodeDiscount } from '../../api/promo_code'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { setIncludedExtras, setPromoDiscount } from '../../features/buy_form_data'
import { useDispatch } from 'react-redux'
import Spinner from '../spinner'

export default function BuyFormExtrasPromo() {

  // Redux
  const dispatch = useDispatch()
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)
  const promoDiscount = useSelector(state => state.buyFormData.promoDiscount)


  // Filter extras
  const extrasFiltered = extras.filter(extra => !extra.exclude_sets.includes(setSelected.name))

  // Initial state
  const [promoCode, setPromoCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Log states
    console.log({promoDiscount})
  }, [includedExtras, promoCode, promoDiscount])

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

          // Show spinner
          setIsLoading(true)

          // Save promo code in local state
          setPromoCode(e.target.value)

          // Save promo discount in redux state
          getPromoCodeDiscount(e.target.value)
            .then(promoCodeDiscount => {
              dispatch(setPromoDiscount(promoCodeDiscount))

              // Hide spinner
              setTimeout(() => setIsLoading(false), 500)
            })

        }}
      />

      <div className="message">
        <Spinner
          isLoading={isLoading}
          small={true}
        />


        <p>
          {
            !isLoading
            &&
            (
              promoCode != ""
              &&
              (
                promoDiscount > 0
                  ?
                  `Promo code applied: -${promoDiscount}%`
                  :
                  'Invalid promo code'
              )
            )
          }
        </p>
      </div>

    </div>
  )
}