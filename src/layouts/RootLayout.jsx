import { Outlet } from 'react-router'

import Footer from '../sections/footer'
import Header from '../sections/header'
import Socials from '../sections/socials'
import TopBar from '../sections/top_bar'

export default function RootLayout() {
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