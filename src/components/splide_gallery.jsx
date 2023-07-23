import PropTypes from 'prop-types'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function SplideGallery({ images_data, options, cards_data }) {
  return (
    <Splide
      aria-label='Hero gallery'
      options={options}
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

      {cards_data && cards_data.map((card_data, index) => {
        return (
          <SplideSlide key={index}>
            <div className="content">
              <img
                src={card_data.image}
                alt={`${card_data.user} profile image`}
              />
              <h3>{card_data.user}</h3>
              <p>{card_data.text}</p>
            </div>
          </SplideSlide>
        )
      })}
    </Splide>
  )
}

SplideGallery.propTypes = {
  images_data: PropTypes.array,
  cards_data: PropTypes.array,
  options: PropTypes.object.isRequired,
}
