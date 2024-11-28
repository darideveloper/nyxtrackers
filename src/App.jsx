import React from 'react'

import { Outlet } from 'react-router'

import Footer from './sections/footer'
import Header from './sections/header'
import Socials from './sections/socials'
import TopBar from './sections/top_bar'

function App() {
  return (
    <div>
      
      {/* Global header */}
      <TopBar />
      <Header />

      {/* Content */}
      <main>
        <Outlet />
      </main>

      {/* Global fotter */}
      <Footer />
      <Socials />
    </div>
  )
}

export default App