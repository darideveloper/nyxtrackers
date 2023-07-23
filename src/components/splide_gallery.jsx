import PropTypes from 'prop-types'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// Import splide react css
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default function SplideGallery({ images_data }) {

  return (
    <Splide
      aria-label='Hero gallery'
      options={{
        autoplay: true,
        type: 'loop',
      }}
    >
      {images_data && images_data.map((image_data, index) => {
        return (
          <SplideSlide key={index}>
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
  images_data: PropTypes.array,
}
