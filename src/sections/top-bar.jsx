import { useEffect, useState } from "react";

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

  return (
    <section className="top-bar">
      {
        links.map((link, index) => (
          <a key={index} href={link.link} target="_blank">
            {link.text}
          </a>
        ))
      }
    </section>
  )

}