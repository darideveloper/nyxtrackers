import FormBtn from "../../components/form_btn"
import { useSelector } from 'react-redux'
import BuyFormLoginLogged from "./buy_form_login_logged"

export default function BuyFormLogin() {

  const sessionEmail = useSelector(state => state.session.email)
  const sessionUsername = useSelector(state => state.session.username)

  return (
    <section className="login">
      {
        sessionEmail
        ?
        <BuyFormLoginLogged
          username={sessionUsername} 
        />
        :
        <p>no </p>
      }
    </section>
  )
}