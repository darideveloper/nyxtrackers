import FormBtn from "../../components/form_btn"
import { clearCookies } from "../../tools/session"
import { setEmail } from "../../features/buy_form_data_slice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

/**
 * Buy form login, when user is logged
 * @param {Object} props - Component props
 * @param {Function} props.setLogged - Set the logged state
 * @returns {JSX.Element} Buy form login logged component
 */
export default function BuyFormLoginNoLogged({ setLogged }) {

  // Redux data
  const sessionUsername = useSelector(state => state.session.username)
  const sessionEmail = useSelector(state => state.session.email)

  // Redux
  const dispatch = useDispatch()

  return (
    <section className="login logged">
      <FormBtn
        alternative={true}
        onClick={() => {
          // Set email in redux
          dispatch(setEmail(sessionEmail))
          setLogged(true)
        }}
      >
        Continue as "{sessionUsername}"
        <svg
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
        >
          <path
            d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"

          />

        </svg>
      </FormBtn>

      <FormBtn
        onClick={() => {
          // Clear cookies and reload page
          clearCookies(true)
        }}
      >
        Logout
        <svg
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M8 10v-5l8 7-8 7v-5h-8v-4h8zm2-8v2h12v16h-12v2h14v-20h-14z"
          />

        </svg>
      </FormBtn>
    </section>
  )
}