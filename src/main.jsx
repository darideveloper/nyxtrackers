import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.sass'
import { TechnicalsContextProvider } from './context/technicals'
import { DashboardContextProvider } from './context/dashboard'
import store from './app/store'
import { Provider } from 'react-redux'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import LandingPage from './pages/LandingPage'
import IssuesPage from './pages/IssuesPage'
import SetupPage from './pages/SetupPage'
import TermsOfService from './pages/TermsOfService'
import RefoundPolicy from './pages/RefoundPolicy'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <App />,
    "children": [
      {
        "path": "/",
        "element": <LandingPage />
      },
      {
        "path": "/issues",
        "element": <IssuesPage />
      },
      {
        "path": "/setup",
        "element": <SetupPage />
      },
      {
        "path": "/terms-of-service",
        "element": <TermsOfService />
      },
      {
        "path": "/refund-policy",
        "element": <RefoundPolicy />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TechnicalsContextProvider>
      <DashboardContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </DashboardContextProvider>
    </TechnicalsContextProvider>
  </React.StrictMode>
)

