import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router'
import SetupPage from './pages/SetupPage'
import IssuesPage from './pages/IssuesPage'

function App() {
    return (
        <Routes>
            <Route index element={<LandingPage />}></Route>

            <Route path='/#' element={<LandingPage />}></Route>
            <Route path='/setup' element={<SetupPage />}></Route>
            <Route path='/issues' element={<IssuesPage />}></Route>

        </Routes>
    )
}

export default App