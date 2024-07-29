import FormBtn from "../../components/form_btn"
import { useSelector } from 'react-redux'

export default function BuyFormLogin() {

  const sessionEmail = useSelector(state => state.session.email)
  const sessionUsername = useSelector(state => state.session.username)

  return (
    <FormBtn >
      Continue as {sessionUsername}
    </FormBtn>
    
  )
}