import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { updateTotal } from '../features/buy_form_data_slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import CountUp from 'react-countup'


export default function BuyFormTotal({ }) {

  // Redux state
  const totalRedux = useSelector(state => state.buyFormData.total)
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const colorsNum = useSelector(state => state.buyFormData.colorsNum)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)
  const promoDiscount = useSelector(state => state.buyFormData.promoDiscount)

  // Redux hooks
  const dispatch = useDispatch()

  // Update the total in the Redux store
  useEffect(() => {
    dispatch(updateTotal())
  }, [setSelected, colorsNum, includedExtras, promoDiscount])

  return (
    <p className={`buy-form-total title`}>
      <CountUp
        start={250}
        end={totalRedux}
        duration={1.2}
        separator=" "
        decimals={2}
        decimal="."
        prefix="$ "
        suffix=" USD"
      />
    </p>
  )
}