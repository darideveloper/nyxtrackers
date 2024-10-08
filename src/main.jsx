import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.sass'
import { TechnicalsContextProvider } from './context/technicals'
import { DashboardContextProvider } from './context/dashboard'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TechnicalsContextProvider>
      <DashboardContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DashboardContextProvider>
    </TechnicalsContextProvider>
  </React.StrictMode>
)

