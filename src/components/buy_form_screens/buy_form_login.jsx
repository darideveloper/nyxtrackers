import { useSelector } from 'react-redux'
import { useState, useEffect } from "react"
import BuyFormLoginLogged from "./buy_form_login_logged"
import BuyFormLoginNoLogged from "./buy_form_login_no_logged"

export default function BuyFormLogin() {

  const [screen, setScreen] = useState("noLogged")

  const screens = {
    "logged": <BuyFormLoginLogged setScreen={setScreen} />,
    "noLogged": <BuyFormLoginNoLogged setScreen={setScreen} />,
  }

  // Redux data
  const sessionEmail = useSelector(state => state.session.email)

  // Setup initial screen
  useEffect(() => {
    if (screen == "noLogged" && sessionEmail) {
      setScreen("logged")
    }
  }, [sessionEmail])
  
  return (
    <section className="login">
      {/* Render current screen */}
      {screens[screen]}
    </section>
  )
}