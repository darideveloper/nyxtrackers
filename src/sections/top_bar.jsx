import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { setSession, clearSession } from "../features/session_slice"
import { useSelector } from 'react-redux'

export default function TopBar() {

  const [links, setLinks] = useState([])
  const dashboardHost = import.meta.env.VITE_DASHBOARD_HOST

  // Redux
  const dispatch = useDispatch()

  useEffect(() => {
    // Get nyx cookie
    const cookies = document.cookie.split(';')
    const nyxCookieUsername = cookies.find(cookie => cookie.includes("nyx_username"))
    const nyxCookieEmail = cookies.find(cookie => cookie.includes("nyx_email"))
    if (nyxCookieUsername && nyxCookieEmail) {

      const username = nyxCookieUsername.split('=')[1]
      const email = nyxCookieEmail.split('=')[1]

      // Save cookie in hooks
      dispatch(setSession({
        username,
        email
      }))

      // Update links
      setLinks([
        {
          "text": `Welcome ${username}`,
          "link": `${dashboardHost}`,
        },
        {
          "text": "logout",
          "link": `${dashboardHost}/admin/logout`,
        },
      ])
    } else {
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

  // Delete cookie and clear email in redux
  function deleteCookie() {
    const deletebase = `expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.nyxtrackers.com;`
    const deleteCookies = [
      "nyx_username",
      "nyx_email"
    ]
    deleteCookies.forEach(cookie => {
      document.cookie = `${cookie}=; ${deletebase}`
    })
    dispatch(clearSession())
  }

  return (
    <section className="top-bar">
      {
        links.map((link, index) => (
          <button key={index} onClick={() => {
            // Delete cookie if logout and refresh page
            if (link.text === 'logout') {
              deleteCookie()
              setTimeout(() => window.location.reload(), 1000)
            } 
            // Open link in new tab
            window.open(link.link, '_blank')
          }}>
            {link.text}
          </button>
        ))
      }
    </section>
  )

}