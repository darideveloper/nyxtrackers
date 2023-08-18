import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.css'
import { TechnicalsContextProvider } from './context/technicals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TechnicalsContextProvider>
      <App />
    </TechnicalsContextProvider>
  </React.StrictMode>
)

