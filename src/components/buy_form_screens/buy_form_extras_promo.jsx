import { extras } from '../../api/buy_form'
import InputCheckbox from '../input_checkbox'
import Input from '../input'
import { useSelector } from 'react-redux'

export default function BuyFormExtrasPromo() {

  // Redux
  const setSelected = useSelector(state => state.buyFormData.setSelected)

  // Filter extras
  const extrasFiltered = extras.filter(extra => !extra.exclude_sets.includes(setSelected.name))

  return (
    <div className="extras-promo">
      <h2>Extras</h2>
      <div className="extras-wrapper">

        {extrasFiltered.map((extra, index) => (
          <InputCheckbox
            key={index}
            label={`${extra.name} (+${extra.price}USD)`}
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