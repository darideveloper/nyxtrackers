import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Form () {

  const [email, setEmail] = useState('')
  const [formActive, setFormActive] = useState(false)

  const formHost = import.meta.env.VITE_FORM_HOST
  const formEndpoint = `${formHost}/contact-form`
  const loading = document.getElementById('loading')

  async function handleSubmit (e) {
    e.preventDefault()

    // Show loading
    loading.style.display = 'flex'

    // Submit form data as json
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Accept", "application/json")
    let response = await fetch(formEndpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({"email": email}),
    })
    
    // Disable loading
    loading.style.display = 'none'

    // Validate response status
    let alertTitle = ''
    let alertText = ''
    if (response.status == 200) {
      alertTitle = "Thank you for suscribing!"
      alertText = "Now you will get notified when commissions open, by email!"
    } else {
      alertTitle = "Error"
      alertText = "Please try again later"
    }
    
    // Show alert
    setTimeout(() => {
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        title: alertTitle,
        text: alertText,
        showConfirmButton: false,
      })
    }, 1000)
  }

  return (
    <div 
      className={`form-wrapper ${formActive && "active"}`}
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
          <label 
            htmlFor="email"
          >
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="sample@email.com" 
            required 
            autoComplete="off"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input 
            type="submit" 
            value="Suscribe" 
            className="btn submit" 
          />
        </div>
      </form>
    </div>
  )
}