import { useContext } from 'react'
import { DashboardContext } from '../context/dashboard'


export default function Notifications() {

  const { notifications } = useContext(DashboardContext)

  return (
    <marquee className="notifications">
      {
        notifications.map((notification, index) => (
          <a key={index} href={notification.link}>
            <span>{notification.key}</span>
            {notification.value}
          </a>
        ))
      }
    </marquee>
  )
}