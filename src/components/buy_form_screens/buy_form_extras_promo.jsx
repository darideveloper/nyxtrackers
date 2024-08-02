import Input from '../input'
import InputCheckbox from '../input_checkbox'
import { extras } from '../../api/buy_form'
import { ValidatePromoCode } from '../../api/promo_code'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { setIncludedExtras } from '../../features/buy_form_data'
import { useDispatch } from 'react-redux'

export default function BuyFormExtrasPromo() {

  // Redux
  const dispatch = useDispatch()
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)

  useEffect(() => {
    console.log(includedExtras)
  }, [includedExtras])

  // Filter extras
  const extrasFiltered = extras.filter(extra => !extra.exclude_sets.includes(setSelected.name))

  // Initial state
  const [promoCode, setPromoCode] = useState('')

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
      />
    </div>
  )
}