import { useEffect } from 'react'
import { sleep } from './tools/events'
import Loading from './sections/loading'
import Header from './sections/header'
import Hero from './sections/hero'
import About from './sections/about'
import VideosGrid from './sections/videos_grid'
import ColorOptions from './sections/colors_option'
import Models from './sections/models'
import Testimonials from './sections/testimonials'
import WhyUs from './sections/why_us'
import Footer from './sections/footer'
import Socials from './sections/socials'
import Collaborations from './sections/collaborations'

// Alert imports
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { alert_title, alert_text } from './api/alert'

function App() {

    // Wait for the page to load before removing the loading screen
    useEffect(() => {
        sleep(5)
        .then(() => {
            document.getElementById('loading').style.display = 'none'
        })
        .then (() => {
            sleep(3).then (() => {
              // Show alert after loading ends
              const MySwal = withReactContent(Swal)
              MySwal.fire({
                position: 'top-end',
                icon: 'info',
                title: alert_title,
                text: alert_text,
                showConfirmButton: false,
                timer: 8000,
              })
            })
        })
    }, [])

    return (
        <>
            <Header />
            <Loading />
            <main>
                <Hero />
                <About />
                <ColorOptions />
                <VideosGrid />
                <Models />
                <Testimonials />
                <Collaborations />
                <WhyUs />
            </main>
            <Footer />
            <Socials />
        </>
    )
}

export default App
