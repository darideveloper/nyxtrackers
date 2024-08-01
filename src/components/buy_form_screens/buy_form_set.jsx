import { setsOptions } from '../../api/buy_form'
import { useSelector } from 'react-redux'
import { setSelectedSet } from '../../features/buy_form_data'
import { useDispatch } from 'react-redux'
import { setHasNext } from '../../features/buy_form_screen_slice'
import { useEffect } from 'react'
import SetBtn from '../set_btn'


export default function BuyFormSet() {

  // Redux  
  const dispatch = useDispatch()
  const selectedSet = useSelector(state => state.buyFormData.setSelected)
  const selectedColor = useSelector(state => state.buyFormData.colorSelected)

  useEffect(() => {
    // Enable next screen when load
    dispatch(setHasNext(true))
  }, [])

  return (
    <section
      className="set"
    >
      {
        setsOptions.map((set, index) => (
          <SetBtn 
            key={index}
            name={set.name}
            color={selectedColor}
            points={set.points}
            price={set.price}
            recommended={set.recommended}
            selected={selectedSet.name === set.name}
            onClick={() => dispatch(setSelectedSet(set))}
          />
        ))
      }
    </section>
  )
}