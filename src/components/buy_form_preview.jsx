import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import Spinner from './spinner'
import { set } from 'react-hook-form'

export default function BuyFormPreview({}) {

  // Redux
  const currentSet = useSelector(state => state.buyFormData.setSelected)
  const currentColor = useSelector(state => state.buyFormData.colorSelected)
  const formScreen = useSelector(state => state.buyFormScreen.value)

  const [isHidden, setIsHidden] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Hide image in login screen
    if (formScreen === 'Login to buy') {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  }, [formScreen])

  useEffect(() => {
    // Show loading spinner when set or color changes
    if (!isLoading) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [currentSet, currentColor])

  // Image path
  const imagePath = `/sets/${currentSet.name} ${currentColor}.webp`

  return (
    <div className="buy-form-preview">
      <Spinner isLoading={isLoading} />
      <img 
        className={`${isHidden ? "hidden" : ""}`}
        src={imagePath}
      />
    </div>
  )
}