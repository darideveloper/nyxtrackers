import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'

export default function BuyFormPreview({}) {

  // Redux
  const currentSet = useSelector(state => state.buyFormData.setSelected)
  const currentColor = useSelector(state => state.buyFormData.colorSelected)
  const formScreen = useSelector(state => state.buyFormScreen.value)

  const [isHidden, setIsHidden] = useState(false)

  // Hide image in login screen
  useEffect(() => {
    if (formScreen === 'Login to buy') {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  }, [formScreen])

  // Image path
  const imagePath = `/sets/${currentSet.name} ${currentColor}.webp`

  return (
    <img 
      className={`buy-form-preview ${isHidden ? "hidden" : ""}`}
      src={imagePath}
    />
  )
}