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

  function clickLogout() {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }

  return (
    <section className="top-bar">
      {
        links.map((link, index) => (
          <a key={index} href={link.link} target="_blank" onClick={link.text === 'logout' ? clickLogout : null}>
            {link.text}
          </a>
        ))
      }
    </section>
  )

}