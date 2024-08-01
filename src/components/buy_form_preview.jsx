import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import Spinner from './spinner'

export default function BuyFormPreview({}) {

  // Redux
  const currentSet = useSelector(state => state.buyFormData.setSelected)
  const currentColor = useSelector(state => state.buyFormData.colorSelected)
  const formScreen = useSelector(state => state.buyFormScreen.value)
  const logoUrl = useSelector(state => state.buyFormData.logoUrl)

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
    <div className={`buy-form-preview ${currentSet.name} ${isHidden ? 'hidden' : ''}`}>
      <Spinner isLoading={isLoading} />
      <img 
        src={imagePath}
      />

      {/* Logo images */}
      {
        logoUrl
        &&
        <div className="logo-images">
          {
            [...Array(currentSet.logos)].map((_, index) => (
              <img 
                key={index}
                src={logoUrl}
                className='logo-image'
              />
            ))
          }
        </div>
      }

      <span className="layer"></span>

    </div>
  )
}