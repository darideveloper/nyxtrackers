import { useEffect, useState } from 'react'
import { testimonials_data } from '../api/testimonials'
import SplideGallery from '../components/splide_gallery'
import TitleSeparator from '../components/title_separator'

export default function Testimonials() {

    const [perPage, setPerPage] = useState(3)

    function handleResize() {
        // Resize gallery elements

        if (window.matchMedia("(max-width: 800px)").matches) {
            setPerPage (1)
        } else if (window.matchMedia("(max-width: 1000px)").matches) {
            setPerPage (2)
        } else if (window.matchMedia("(max-width: 1250px)").matches) {
            setPerPage (3)
        }
    }

    // Resize gallery elements when screen size changes
    addEventListener("resize", (event) => {
        handleResize ()
    });

    // Resize gallery elements when page loads
    useEffect(() => {
        handleResize ()
    }, [])

    return (
        <section
            id='testimonials'
            className='regular-width'
        >
            <TitleSeparator title='Testimonials' />

            <SplideGallery
                cards_data={testimonials_data}
                options={{
                    perPage: perPage,
                    rewind: true,
                    padding: '5rem',
                    perMove: 1,
                }}
            />
        </section>
    )
}
