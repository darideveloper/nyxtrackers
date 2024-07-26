import { useEffect, useState } from "react"

export default function TopBar() {

  const [links, setLinks] = useState([])
  const dashboardHost = import.meta.env.VITE_DASHBOARD_HOST
  const cookieName = 'nyx'

  useEffect(() => {
    // Get nyx cookie
    const nyxCookie = document.cookie.split(';').find(cookie => cookie.includes(cookieName))
    if (nyxCookie) {
      const username = nyxCookie.split('=')[1]
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

  function deleteCookie() {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.nyxtrackers.com;`
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