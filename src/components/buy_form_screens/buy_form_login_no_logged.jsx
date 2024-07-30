import FormBtn from "../form_btn"
import { useState } from "react"
import Input from "../input"
import { setEmail } from "../../features/buy_form_data"
import { useDispatch } from "react-redux"

/**
 * Buy form login, when user is not logged
 * @param {Object} props - Component props
 * @param {Function} props.setScreen - Set the next screen
 * @returns {JSX.Element} Buy form login logged component
 */
export default function BuyFormLoginNoLogged({ setScreen }) {

  const dashboardHost = import.meta.env.VITE_DASHBOARD_HOST

  const [isGuest, setIsGuest] = useState(false)

  // Redux
  const dispatch = useDispatch()


  return (
    <section className="login no-logged">
      <FormBtn
        alternative={true}
        onClick={() => {
          // Open login page and refresh
          const loginLink = `${dashboardHost}/admin/login`
          window.open(loginLink, '_blank')

          // Refresh page when recover focus
          window.onfocus = () => {
            window.location.reload()
          }

        }}
      >
        Login / Sign up
        <svg
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.804 9c1.038-1.793 2.977-3 5.196-3 3.311 0 6 2.689 6 6s-2.689 6-6 6c-2.219 0-4.158-1.207-5.196-3h-3.804l-1.506-1.503-1.494 1.503-1.48-1.503-1.52 1.503-3-3.032 2.53-2.968h10.274zm7.696 1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
          />

        </svg>
      </FormBtn>

      {
        isGuest
          ?
          <>
            {/* Email form */}
            <Input
              type="email"
              name="email"
              label="Email"
              hideLabel={true}
              placeholder="Enter your email"
              required={true}
              onChange={(event) => {
                dispatch(setEmail(event.target.value))
              }}
            />

            <FormBtn
              onClick={() => {
                // Set email in redux
                setScreen("next")
              }}
            >
              Continue
            </FormBtn>
          </>
          :
          <>
            {/* Gues button */}
            <FormBtn
              onClick={() => {
                // Login as guest screen
                setIsGuest(true)
              }}
            >
              Buy as guest
              <svg
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
                />

              </svg>
            </FormBtn>
          </>
      }

    </section>
  )
}