import { 
  setFullName,
  setCountry,
  setState,
  setCity,
  setPostalCode,
  setStreetAddress,
  setPhone,
} from '../../features/buy_form_data_slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Input from '../input'
import { setHasNext, setNextText } from '../../features/buy_form_screen_slice'


export default function BuyFormShipping() {

  // Redux data
  const dispatch = useDispatch()
  const fullName = useSelector(state => state.buyFormData.fullName)
  const country = useSelector(state => state.buyFormData.country)
  const state = useSelector(state => state.buyFormData.state)
  const city = useSelector(state => state.buyFormData.city)
  const postalCode = useSelector(state => state.buyFormData.postalCode)
  const streetAddress = useSelector(state => state.buyFormData.streetAddress)
  const phone = useSelector(state => state.buyFormData.phone)


  const inputsData = [
    {
      label: 'Full name',
      value: fullName,
      onChange: (e) => dispatch(setFullName(e.target.value)),
      placeholder: 'John Doe',
    },
    {
      label: 'Country',
      value: country,
      onChange: (e) => dispatch(setCountry(e.target.value)),
      placeholder: 'United States',
    },
    {
      label: 'State',
      value: state,
      onChange: (e) => dispatch(setState(e.target.value)),
      placeholder: 'California',
    },
    {
      label: 'City',
      value: city,
      onChange: (e) => dispatch(setCity(e.target.value)),
      placeholder: 'Los Angeles',
    },
    {
      label: 'Postal code',
      value: postalCode,
      onChange: (e) => dispatch(setPostalCode(e.target.value)),
      placeholder: '90001',
    },
    {
      label: 'Street address',
      value: streetAddress,
      onChange: (e) => dispatch(setStreetAddress(e.target.value)),
      placeholder: '123 Main St',
    },
    {
      label: 'Phone',
      value: phone,
      onChange: (e) => dispatch(setPhone(e.target.value)),
      placeholder: '+1 123 456 7890',
    },
  ]

  useEffect(() => {

    // Enable next button if all inputs are filled
    const inputValues = [
      fullName, country, state, city, postalCode, streetAddress, phone
    ]
    const emptyInputs = inputValues.filter(input => input === '')
    if (emptyInputs.length === 0) {
      dispatch(setHasNext(true))
    } else {
      dispatch(setHasNext(false))
    }
  }, [fullName, country, state, city, postalCode, streetAddress, phone])

  useEffect(() => {
    // Update next text when load
    dispatch(setNextText('Order Now!'))
  }, [])


  return (
    <section
      className="shipping"
    >
      {
        inputsData.map((input, index) => (
          <Input
            key={index}
            type='text'
            name={input.label}
            label={input.label}
            placeholder={input.placeholder}
            required={true}
            value={input.value}
            onChange={input.onChange}
            small={true}
          />
        ))
      }
    </section>
  )
}