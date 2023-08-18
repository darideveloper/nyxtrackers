import { useState } from "react"

export default function Form () {

  const [formActive, setFormActive] = useState(false)

  return (
    <div 
      className={`form-wrapper ${formActive && "active"}`}
      onMouseEnter={() => {setFormActive(true)}}
      onMouseLeave={() => {setFormActive(false)}}
    >
      <form>
        <h2>Sign up to our mailing list</h2>
        <p>You will get notified when commissions opens</p>
        <div className={`inputs`}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="sample@email.com" required autoComplete="off"/>
          <input type="submit" value="Suscribe" className="btn submit" />
        </div>
      </form>
    </div>
  )
}