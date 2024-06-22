import { createContext, useState, useEffect } from 'react'

// Get context and set a name
export const DashboardContext = createContext()

export function DashboardContextProvider(props) {

  const [heroCounters, setHeroCounters] = useState([])
  const [notifications, setNotifications] = useState([])

  const apiBase = import.meta.env.VITE_DASHBOARD_API

  useEffect(() => {
    
    // Get texts
    const textEndpoint = `${apiBase}/texts/`
  
    // Get data with await/async
    fetch(textEndpoint)
      .then(response => response.json())
      .then(textData => {
        const texts = textData.data

        // Filter counters
        const counters = texts.filter(text => text.category == "counter")
        setHeroCounters(counters)

        // Filter notifications
        const notifications = texts.filter(text => text.category == "notification")
        setNotifications(notifications)

      })
  }, [])

  return (
    <DashboardContext.Provider
      value={{
        heroCounters,
        notifications,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}