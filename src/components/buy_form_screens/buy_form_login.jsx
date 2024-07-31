import { useSelector } from 'react-redux'
import { useState, useEffect } from "react"
import BuyFormLoginLogged from "./buy_form_login_logged"
import BuyFormLoginNoLogged from "./buy_form_login_no_logged"
import { nextScreen } from '../../features/buy_form_screen_slice'
import { useDispatch } from 'react-redux'

export default function BuyFormLogin() {


  // Local screens
  const [screen, setScreen] = useState("noLogged")
  const screens = {
    "logged": <BuyFormLoginLogged setScreen={setScreen} />,
    "noLogged": <BuyFormLoginNoLogged setScreen={setScreen} />,
  }

  // Redux data
  const sessionEmail = useSelector(state => state.session.email)
  const dispatch = useDispatch()

  // Setup initial screen
  useEffect(() => {
    if (screen == "noLogged" && sessionEmail) {
      setScreen("logged")
    } else if (screen == "next") {
      dispatch(nextScreen())
    }
  }, [sessionEmail, screen])
  
  return (
    <section className="login">
      {/* Render current screen */}
      {screens[screen]}
    </section>
  )
}