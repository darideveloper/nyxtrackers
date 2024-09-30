import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { setSession, clearSession } from "../features/session_slice"
import { getCookies, clearCookies } from '../tools/session'
import { submitEvent } from '../libs/google-analytics'

export default function TopBar() {

  const [links, setLinks] = useState([])
  const dashboardHost = import.meta.env.VITE_DASHBOARD_HOST

  // Redux
  const dispatch = useDispatch()

  useEffect(() => {
    // Get nyx cookie 
    const cookies = getCookies()
    
    if (cookies.username && cookies.email) {

      // Google Analytics
      submitEvent("logged_in")

      const username = cookies.username
      const email = cookies.email.replaceAll('"', '')

      // Save cookie in hooks
      dispatch(setSession({
        username,
        email
      }))

      // Update links
      setLinks([
        {
          "text": `Welcome ${username}`,
          "link": ``,
        },
        {
          "text": `Dashboard`,
          "link": `${dashboardHost}`,
        },
        {
          "text": "logout",
          "link": `${dashboardHost}/admin/logout`,
        },
      ])
    } else {
      submitEvent("not_logged_in")

      setLinks([
        {
          "text": "login",
          "link": `${dashboardHost}/login/`,
        },
        {
          "text": "sign up",
          "link": `${dashboardHost}/sign-up/`,
        }
      ])
    }


  }, [])

  return (
    <section className="top-bar">
      {
        links.map((link, index) => (

          link.link === ''
          ?
          <p key={index}>
            {link.text}
          </p>
          :
          <button key={index} onClick={() => {          

            // Delete cookie if logout and refresh page
            if (link.text === 'logout') {  
              clearCookies()
              dispatch(clearSession())
            } 
            // Open link in new tab
            // window.open(link.link, '_self')
          }}>
            {link.text}
          </button>
        ))
      }
    </section>
  )

}