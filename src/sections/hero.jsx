import { hero_gallery_data, hero_info_cards_data } from '../api/hero'
import Gallery from '../components/gallery'
import InfoCard from '../components/info_card'

export default function Hero() {

  return (
    <section
      className='regular-width'
      id='hero'
    >
      <Gallery
        images_data={hero_gallery_data}
      />
      <div className='info-cards-wrapper hero'>
        {hero_info_cards_data.map((info_cards, index) => {
          return (
            <InfoCard
              key={index}
              icon={info_cards.icon}
              title={info_cards.title}
              text={info_cards.text}
              link={info_cards.link}
            />
          )
        })}
      </div>
    </section>
  )
}
