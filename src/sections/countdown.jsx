import { useContext, useState, useEffect } from 'react'
import { DashboardContext } from '../context/dashboard'
import Button from '../components/button'

export default function CountDown() {
  const { nextFutureStock } = useContext(DashboardContext)

  // Counter states
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [totalSeocndsLoaded, setTotalSecondsLoaded] = useState(false)


  function updateCounter() {
    // Calculate new days, hours, minutes, and seconds
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600)
    const minutes = Math.floor(totalSeconds % 3600 / 60)
    const seconds = Math.floor(totalSeconds % 60)

    // Set the new values
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  useEffect(() => {
    if (!totalSeocndsLoaded && nextFutureStock != 0) {
      // Save the total seconds
      setTotalSeconds(nextFutureStock)
      setTotalSecondsLoaded(true)
    }
  }, [nextFutureStock])

  // Start running the counter
  useEffect(() => {
    if (totalSeocndsLoaded) {
      const interval = setInterval(() => {
        if (totalSeconds > 0) {
          setTotalSeconds(totalSeconds - 1)
          updateCounter()
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [totalSeconds])

  return (
    <section className="countdown">
      <h2>New sets in</h2>
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
        totalSeconds === 0
          ?
          <>
            <p>
              New sets are available now!
            </p>
            <Button
              text="Buy here!"
              link="#buy-form"
            />
          </>
          :
          <Button
            text="Notify me"
            link="#mailing-list-form"
          />
      }

      
    </section>
  )
}