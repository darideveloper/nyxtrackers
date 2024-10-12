import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import Spinner from './spinner'

export default function BuyFormPreview({}) {

  // Redux
  const currentSet = useSelector(state => state.buyFormData.setSelected)
  const currentColor = useSelector(state => state.buyFormData.colorSelected)
  const logoUrl = useSelector(state => state.buyFormData.logoUrl)

  const [isLoading, setIsLoading] = useState(false)

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
    <div className={`buy-form-preview ${currentSet.name}`}>
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
    </div>
  )
}