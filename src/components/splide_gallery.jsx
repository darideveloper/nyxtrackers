import PropTypes from 'prop-types'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function SplideGallery({ images_data }) {
    return (
        <Splide
            aria-label='Hero gallery'
            options={{
                wheel: true,
                autoplay: true,
            }}
        >
            {images_data.map((image_data) => {
                return (
                    <SplideSlide key={image_data.image}>
                        <a
                            href={image_data.link}
                            target='_blank'
                        >
                            <img
                                src={image_data.image}
                                alt={image_data.alt}
                            />
                        </a>
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}

SplideGallery.propTypes = {
    images_data: PropTypes.array.isRequired,
}
