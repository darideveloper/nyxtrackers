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

    const states = [
      {
        setState: setHeroImages,
        type: "images",
        category: "hero"
      },
      {
        setState: setHeroCounters,
        type: "texts",
        category: "counter"
      },
      {
        setState: setNotifications,
        type: "texts",
        category: "notification"
      },
      {
        setState: setAboutVideos,
        type: "videos",
        category: "about"
      },
    ]

    // Lopp through endpoints
    const url = `${apiBase}/landing/batch/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        states.forEach(state => {
          const items = data[state.type]
          const filteredItems = items.filter(item => item.category == state.category)
          state.setState(filteredItems)
        })
      })
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    console.log({heroCounters, notifications, heroImages, aboutVideos})
  }, [heroCounters, notifications, heroImages, aboutVideos])

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