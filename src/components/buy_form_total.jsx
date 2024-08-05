import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { updateTotal } from '../features/buy_form_data_slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function BuyFormTotal({}) {

  // Redux state
  const totalRedux = useSelector(state => state.buyFormData.total) 
  const setSelected = useSelector(state => state.buyFormData.setSelected)
  const colorsNum = useSelector(state => state.buyFormData.colorsNum)
  const includedExtras = useSelector(state => state.buyFormData.includedExtras)
  const promoDiscount = useSelector(state => state.buyFormData.promoDiscount)

  // Local state
  const [currentTotal, setCurrentTotal] = useState(totalRedux)

  // Redux hooks
  const dispatch = useDispatch()

  useEffect(() => {
    console.log({currentTotal, totalRedux})
    dispatch(updateTotal())
  }, [setSelected, colorsNum, includedExtras, promoDiscount])

  return (
    <p className={`buy-form-total title`}>
      $ {totalRedux} USD
    </p>
  )
}