import Input from '../input'
import TextArea from '../text_area'

import { 
  setFullName,
  setCountry,
  setState,
  setCity,
  setPostalCode,
  setStreetAddress,
  setPhone,
  setComments,
} from '../../features/buy_form_data_slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { submitEvent } from '../../libs/google-analytics'


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
  const comments = useSelector(state => state.buyFormData.comments)


  const inputsData = [
    {
      label: 'Full name',
      value: fullName,
      onChange: (e) => dispatch(setFullName(e.target.value)),
      placeholder: 'John Doe',
      required: true,
    },
    {
      label: 'Country',
      value: country,
      onChange: (e) => dispatch(setCountry(e.target.value)),
      placeholder: 'United States',
      required: true,
    },
    {
      label: 'State',
      value: state,
      onChange: (e) => dispatch(setState(e.target.value)),
      placeholder: 'California',
      required: true,
    },
    {
      label: 'City',
      value: city,
      onChange: (e) => dispatch(setCity(e.target.value)),
      placeholder: 'Los Angeles',
      required: true,
    },
    {
      label: 'Postal code',
      value: postalCode,
      onChange: (e) => dispatch(setPostalCode(e.target.value)),
      placeholder: '90001',
      required: true,
    },
    {
      label: 'Street address',
      value: streetAddress,
      onChange: (e) => dispatch(setStreetAddress(e.target.value)),
      placeholder: '123 Main St',
      required: true,
    },
    {
      label: 'Phone',
      value: phone,
      onChange: (e) => { 
        dispatch(setPhone(e.target.value))
      
        // Google Analytics
        submitEvent('shipping_data_set')
      },
      placeholder: '+1 123 456 7890',
      required: true,
    },
  ]

  useEffect(() => {

    // Enable next button if all required inputs are filled
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

  // Set has next to false when component is mounted
  useEffect(() => {
    dispatch(setHasNext(false))
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
            required={input.required}
            value={input.value}
            onChange={input.onChange}
            small={true}
          />
        ))
      }
      <TextArea 
        name='comments'
        label='Comments'
        placeholder='Additional information'
        required={false}
        value={comments}
        small={true}
        onChange={(e) => dispatch(setComments(e.target.value))}
      />
    </section>
  )
}