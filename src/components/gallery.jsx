import PropTypes from 'prop-types'

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Gallery({ images_data, cards_data, spaceBetween=10, slidesPerView=1, loop=true, pagination=true }) {

  const [delay, setDelay] = useState(8000)

  let modules = [Navigation, Autoplay]
  if (pagination) {
    modules.push(Pagination)
  }

  
  return (
    <Swiper
      aria-label='Hero gallery'
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={modules}
      autoplay={{
        delay: delay,
        disableOnInteraction: true,
        waitForTransition: true,
      }}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => setDelay(3000)}
      loop={loop}
    >
      {images_data && images_data.map((image_data, index) => {
        return (
          <SwiperSlide key={index}>
            <a
              href={image_data.link}
              target='_blank'
            >
              <img
                src={image_data.image}
                alt={image_data.alt}
              />
            </a>
          </SwiperSlide>
        )
      })}

      {cards_data && cards_data.map((card_data, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="content">
              <img
                src={card_data.image}
                alt={`${card_data.user} profile image`}
              />
              <h3>{card_data.user}</h3>
              <p>{card_data.text}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

Gallery.propTypes = {
  images_data: PropTypes.array,
  cards_data: PropTypes.array,
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.number,
  loop: PropTypes.bool,
}
