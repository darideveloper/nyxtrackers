import { createContext, useState, useEffect } from 'react'

// Get context and set a name
export const DashboardContext = createContext()

export function DashboardContextProvider(props) {

  const [heroCounters, setHeroCounters] = useState([])
  const [notifications, setNotifications] = useState([])
  const [heroImages, setHeroImages] = useState([])
  const [aboutVideos, setAboutVideos] = useState([])

  const apiBase = import.meta.env.VITE_DASHBOARD_API

  useEffect(() => {

    const endpoints = [
      {
        endpoint: "images",
        states: [
          {
            setState: setHeroImages,
            category: "hero"
          },
        ]
      },
      {
        endpoint: "texts",
        states: [
          {
            setState: setHeroCounters,
            category: "counter"
          },
          {
            setState: setNotifications,
            category: "notification"
          }
        ]
      },
      {
        endpoint: "videos",
        states: [
          {
            setState: setAboutVideos,
            category: "about"
          },
        ]
      },
    ]

    // Lopp through endpoints
    endpoints.forEach(endpoint => {
      const url = `${apiBase}/${endpoint.endpoint}/`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const items = data.data
          endpoint.states.forEach(state => {
            const filteredItems = items.filter(item => item.category == state.category)
            state.setState(filteredItems)
          })
        })
        .catch(error => console.error(error))
    })
  }, [])

  // useEffect(() => {
  //   console.log({heroCounters, notifications, heroImages, aboutVideos})
  // }, [heroCounters, notifications, heroImages, aboutVideos])

  return (
    <DashboardContext.Provider
      value={{
        heroCounters,
        notifications,
        heroImages,
        aboutVideos,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}