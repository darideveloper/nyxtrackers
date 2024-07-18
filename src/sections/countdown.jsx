import { useContext, useState } from 'react'
import { DashboardContext } from '../context/dashboard'
import Button from '../components/button'

export default function CountDown() {
  const { nextFutureStock } = useContext(DashboardContext)

  // Counter states
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Form states
  const [email, setEmail] = useState('')

  const apiBase = import.meta.env.VITE_DASHBOARD_API
  const formAction = `${apiBase}/store/notify/`

  // Update the countdown every 1 second
  setInterval(function () {

    // Calculate the distance between now and the target date
    var now = new Date().getTime()
    var distance = nextFutureStock - now

    // Calculate new days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Set the new values
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }, 1000)

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
      <p>
        <small>Next set will be available on {new Date(nextFutureStock).toLocaleString()}</small>
      </p>

      <Button 
        text="Notify me"
        link="#form"
      />
    </section>
  )
}