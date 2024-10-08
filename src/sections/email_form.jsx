import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Input from "../components/input"

export default function EmailForm () {

  const [email, setEmail] = useState('')
  const [formActive, setFormActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const formHost = import.meta.env.VITE_DASHBOARD_API
  const formEndpoint = `${formHost}/store/future-stock-subscription/`

  async function handleSubmit (e) {
    e.preventDefault()

    setIsLoading(true)

    // Submit form data as json
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Accept", "application/json")
    let response = await fetch(formEndpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "email": email,
        "type": "add",
      }),
    })

    // Validate response status
    let alertTitle = ''
    let alertText = ''
    if (response.status == 200) {
      alertTitle = "Thank you for suscribing!"
      alertText = "Now you will get notified when commissions open, by email!"
    } else {
      const jsonData = await response.json()
      const message = jsonData.message
      alertTitle = "Error"
      alertText = `${message}. Please try again later`
    }
    
    // Show alert
    setTimeout(() => {
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        title: alertTitle,
        text: alertText,
        showConfirmButton: false,
      })
    }, 100)

    setIsLoading(false)
  }

  return (
    <div 
      className={`email_form ${formActive && "active"}`}
      onMouseEnter={() => {setFormActive(true)}}
      onMouseLeave={() => {setFormActive(false)}}
      id="mailing-list-form"
    >
      <form
        onSubmit={handleSubmit}
      >
        <h2>Sign up to our mailing list</h2>
        <p>You will get notified when commissions opens</p>
        <div className={`inputs`}>
          <Input 
            type={"email"}
            name={"email"}
            label={"Email"}
            hideLabel={true}
            placeholder={"sample@email.com"} 
            required={true}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input 
            type="submit" 
            value={isLoading ? "Loading..." : "Submit"}
            className="btn submit" 
          />
        </div>
      </form>
    </div>
  )
}