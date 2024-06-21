import { hero_gallery_data } from '../api/hero'
import { useContext } from 'react'
import { DashboardContext } from '../context/dashboard'
import Gallery from '../components/gallery'
import InfoCard from '../components/info_card'

export default function Hero() {

  const { heroCounters } = useContext(DashboardContext)

  return (
    <section
      className='regular-width'
      id='hero'
    >
      <Gallery
        images_data={hero_gallery_data}
      />
      <div className='info-cards-wrapper hero'>
        {heroCounters.map((counter, index) => {
          return (
            <InfoCard
              key={index}
              icon={`/counter_${counter.key.replace(" ", "_")}.svg`}
              title={counter.key}
              text={counter.value}
              link={counter.link}
            />
          )
        })}
      </div>

      <video 
        src="hero.mp4"
        controls
        muted
        autoPlay
        loop
      />
    </section>
  )
}
