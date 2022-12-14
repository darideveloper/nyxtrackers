import Loading from './sections/loading'
import Header from './sections/header'
import Hero from './sections/hero'
import About from './sections/about'
import VideosGrid from './sections/videos_grid'
import Models from './sections/models'
import Testimonials from './sections/testimonials'
import WhyUs from './sections/why_us'
import Footer from './sections/footer'
import Socials from './sections/socials'
import { sleep } from './tools/events'

function App() {
    

    window.addEventListener('load', async () => {
        await sleep(5)
        document.getElementById('loading').style.display = 'none'
    })

    return (
        <>
            <Header />
            <Loading />
            <main>
                <Hero />
                <About />
                <VideosGrid />
                <Models />
                <Testimonials />
                <WhyUs />
            </main>
            <Footer />
            <Socials />
        </>
    )
}

export default App
