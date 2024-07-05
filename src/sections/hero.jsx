import { useContext } from 'react'
import { DashboardContext } from '../context/dashboard'
import Gallery from '../components/gallery'
import InfoCard from '../components/info_card'

export default function Hero() {

  const { heroCounters, heroImages } = useContext(DashboardContext)

  // Format images
  const heroImagesFormatted = heroImages.map(image => {
    return {
      image: image.image,
      alt: `{image.key.replace("_", " ")} image`,
      link: image.link,
    }
  })

  return (
    <section
      className='regular-width'
      id='hero'
    >
      <Gallery
        images_data={heroImagesFormatted}
      />
      <div className='info-cards-wrapper hero'>
        {heroCounters.map((counter, index) => {
          return (
            <InfoCard
              key={index}
              icon={`/counter_${counter.key.replace(" ", "_")}.svg`}
              title={counter.value}
              text={counter.key}
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
