import { createContext, useState, useEffect } from 'react'

// Get context and set a name
export const DashboardContext = createContext()

export function DashboardContextProvider(props) {

  // Landing api states
  const [heroCounters, setHeroCounters] = useState([])
  const [notifications, setNotifications] = useState([])
  const [heroImages, setHeroImages] = useState([])
  const [aboutVideos, setAboutVideos] = useState([])

  // Store states
  const [nextFutureStock, setNextFutureStock] = useState(0)

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

    // Loop through landing endpoints
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

  // Get store data
  const url = `${apiBase}/store/next-future-stock/`
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNextFutureStock(data["next_future_stock"])
      })
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    console.log({heroCounters, notifications, heroImages, aboutVideos, nextFutureStock})
  }, [heroCounters, notifications, heroImages, aboutVideos, nextFutureStock])

  return (
    <DashboardContext.Provider
      value={{
        heroCounters,
        notifications,
        heroImages,
        aboutVideos,
        nextFutureStock,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}