import { useSelector } from 'react-redux'
import { useState, useEffect } from "react"
import BuyFormLoginLogged from "./buy_form_login_logged"
import BuyFormLoginNoLogged from "./buy_form_login_no_logged"
import { nextScreen } from '../../features/buy_form_screen_slice'
import { useDispatch } from 'react-redux'

/**
 * Login form for the buy form
 * @param {Object} props
 * @param {Boolean} props.startLoading - Function to start loading 
 * @returns 
 */
export default function BuyFormLogin({startLoading}) {


  // Local screens
  const [screen, setScreen] = useState("noLogged")
  const [logged, setLogged] = useState(false)
  const screens = {
    "logged": <BuyFormLoginLogged setLogged={setLogged} />,
    "noLogged": <BuyFormLoginNoLogged setLogged={setLogged} />
  }

  // Redux data
  const sessionEmail = useSelector(state => state.session.email)
  const dispatch = useDispatch()

  useEffect(() => {
    // Setup initial screen
    if (screen == "noLogged" && sessionEmail) {
      setScreen("logged")
    } 
  }, [screen, sessionEmail])

  useEffect(() => {
    // Move to next screen
    if (logged) {
      startLoading()
      setTimeout(() => {
        dispatch(nextScreen())
      }, 500)
    }
  }, [logged])
  
  return (
    <section className="login">
      {/* Render current screen */}
      {screens[screen]}
    </section>
  )
}