import { useEffect } from 'react'
import { sleep } from './tools/events'
import Loading from './sections/loading'
import Header from './sections/header'
import Hero from './sections/hero'
import About from './sections/about'
import VideosMain from './sections/videos_main'
import VideosCustomer from './sections/videos_customer'
import ColorOptions from './sections/colors_option'
import Models from './sections/models'
import Testimonials from './sections/testimonials'
import WhyUs from './sections/why_us'
import Footer from './sections/footer'
import Socials from './sections/socials'
import Collaborations from './sections/collaborations'
import Personalization from './sections/personalization'
import Form from './components/form'
import Notifications from './sections/notifications'

// Alert imports
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { alert_title, alert_text } from './api/alert'

function App() {

  // Wait for the page to load before removing the loading screen
  useEffect(() => {
    sleep(3.5)
      .then(() => {
        document.getElementById('loading').style.display = 'none'
      })
      .then(() => {
        sleep(1)
          .then(() => {
            // Show alert after loading ends
            const MySwal = withReactContent(Swal)
            MySwal.fire({
              position: 'top-end',
              iconHtml: '<img src="./kofi-logo.png"/>',
              title: alert_title,
              text: alert_text,
              showConfirmButton: false,
              timer: 6000,
            })
          })
      })

  }, [])

  return (
    <>
      <Header />
      <Loading />
      <main>
        <Notifications />
        <Hero />
        <Form />
        <About />
        <Personalization />
        <ColorOptions />
        <VideosMain />
        <Models />
        <Testimonials />
        <VideosCustomer />
        <Collaborations />
        <WhyUs />
      </main>
      <Footer />
      <Socials />
    </>
  )
}

export default App
