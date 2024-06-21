import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.css'
import { TechnicalsContextProvider } from './context/technicals'
import { DashboardContextProvider } from './context/dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TechnicalsContextProvider>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </TechnicalsContextProvider>
  </React.StrictMode>
)

