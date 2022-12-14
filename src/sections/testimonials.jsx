import { testimonials_data } from '../api/testimonials'
import { wrap_text } from '../tools/text'
import SplideGallery from '../components/splide_gallery'
import TitleSeparator from '../components/title_separator'

export default function Testimonials() {

    // Truncate the number of characters in the testimonial text
    testimonials_data.forEach((testimonial) => {
        testimonial.text = wrap_text(testimonial.text, 250)
    })

    return (
        <section
            id='testimonials'
            className='regular-width'
        >
            <TitleSeparator title='Testimonials' />

            <SplideGallery
                cards_data={testimonials_data}
                options={{
                    perPage: 3,
                    rewind: true,
                    padding: '5rem',
                    perMove: 1,
                }}
            />
        </section>
    )
}
