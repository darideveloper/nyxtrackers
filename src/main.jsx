import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { alert_title, alert_text } from './api/alert'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Ahos alert after loading ends
const MySwal = withReactContent(Swal)
setTimeout(() => {
  MySwal.fire({
    position: 'top-end',
    icon: 'info',
    title: alert_title,
    text: alert_text,
    showConfirmButton: false,
    timer: 8000,
  })
}, 4000)