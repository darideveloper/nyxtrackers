import Button from '../components/button'

import { useContext, useState, useEffect } from 'react'
import { DashboardContext } from '../context/dashboard'
import { useDispatch } from 'react-redux'
import { showForm } from '../features/buy_form_visible_slice'
import { submitEvent } from '../libs/google-analytics'

export default function CountDown() {
  
  const dispatch = useDispatch()

  const { nextFutureStock, currentStock } = useContext(DashboardContext)

  // Counter states
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [totalSecondsLoaded, setTotalSecondsLoaded] = useState(false)
  const [buyBtnText, setBuyBtnText] = useState('Buy here!')

  useEffect(() => {
    if (!totalSecondsLoaded && nextFutureStock != 0) {
      // Save the total seconds
      setTotalSeconds(nextFutureStock)
      setTotalSecondsLoaded(true)
    }
  }, [nextFutureStock])

  useEffect(() => {
    setBuyBtnText(currentStock > 0 ? 'Buy here!' : 'No Sets Left')
  }, [currentStock])

  // Start running the counter
  useEffect(() => {
    if (totalSecondsLoaded) {
      const interval = setInterval(() => {
        setTotalSeconds(prevTotalSeconds => {
          if (prevTotalSeconds > 0) {
            const newTotalSeconds = prevTotalSeconds - 1
            // Update the counter
            const days = Math.floor(newTotalSeconds / (3600 * 24))
            const hours = Math.floor(newTotalSeconds % (3600 * 24) / 3600)
            const minutes = Math.floor(newTotalSeconds % 3600 / 60)
            const seconds = Math.floor(newTotalSeconds % 60)

            // Skip if seoonds are lower than 0
            if (seconds < 0) return prevTotalSeconds

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)

            return newTotalSeconds
          }
          return prevTotalSeconds
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [totalSecondsLoaded])

  return (
    <section className={`countdown ${totalSeconds <= 0 ? 'animated' : ''}`}>
      <h2>New sets {totalSeconds <= 0 ? 'are available now!' : 'coming soon!'}</h2>
      <div className="counters">
        <p className="counter-item">
          <span>{days.toString().length < 2 ? '0' + days : days}</span>
          <span>Days</span>
        </p>
        <p className="counter-item">
          <span>{hours.toString().length < 2 ? '0' + hours : hours}</span>
          <span>Hours</span>
        </p>
        <p className="counter-item">
          <span>{minutes.toString().length < 2 ? '0' + minutes : minutes}</span>
          <span>Min</span>
        </p>
        <p className="counter-item">
          <span>{seconds.toString().length < 2 ? '0' + seconds : seconds}</span>
          <span>Sec</span>
        </p>
      </div>

      {
        totalSeconds <= 0
          ?
          <Button
            text={buyBtnText}
            onClick={() => {
              // Show form with redux
              dispatch(showForm())

              // Google Analytics
              submitEvent("open_form")
            }}
          />
          :
          <Button
            text="Notify me"
            link="#mailing-list-form"
          />
      }      
    </section>
  )
}