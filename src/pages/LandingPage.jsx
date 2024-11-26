import { useEffect } from 'react'
import { sleep } from '../tools/events'
import Loading from '../sections/loading'
import Hero from '../sections/hero'
import About from '../sections/about'
import VideosMain from '../sections/videos_main'
import VideosCustomer from '../sections/videos_customer'
import ColorOptions from '../sections/colors_option'
import Models from '../sections/models'
import Testimonials from '../sections/testimonials'
import WhyUs from '../sections/why_us'
import Collaborations from '../sections/collaborations'
import Personalization from '../sections/personalization'
import EmailForm from '../sections/email_form'
import Notifications from '../sections/notifications'
import CountDown from '../sections/countdown'
import BuyForm from '../sections/buy_form'
import ScrollToHash from '../utils/ScrollHash'



function LandingPage() {

  useEffect(() => {

    // Wait for the page to load before removing the loading screen
    sleep(3.5)
      .then(() => {
        document.getElementById('loading').style.display = 'none'
      })
  }, [])
  return (
    <>
      <ScrollToHash/>
      <Loading />
      <CountDown />
      <Notifications />
      <Hero />
      <About />
      <Personalization />
      <ColorOptions />
      <VideosMain />
      <Models />
      <Testimonials />
      <VideosCustomer />
      <Collaborations />
      <WhyUs />
      <EmailForm />
      <BuyForm />
    </>
  )
}

export default LandingPage;
