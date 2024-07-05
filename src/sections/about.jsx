import { useContext } from 'react'
import { DashboardContext } from '../context/dashboard'
import { about_cards_data } from '../api/about'
import TitleSeparator from '../components/title_separator'
import DetailsCard from '../components/details_card'
import { useEffect, useState } from 'react'

export default function About() {

  const { aboutVideos } = useContext(DashboardContext)
  const [aboutCardsDataVideos, setAboutCardsDataVideos] = useState([])

  useEffect(() => {
    // Check if videos are loaded
    if (aboutVideos.length === 0) return

    // Replace videos with dashboard context
    const videoData = about_cards_data.map(about_card => {
      const currentVideo = aboutVideos.find(video => video.key === about_card.video)
      return {
        ...about_card,
        video: currentVideo.video
      }
    })
    setAboutCardsDataVideos(videoData)

  }, [aboutVideos])


  return (
    <section
      className='regular-width'
      id='about'
    >
      <TitleSeparator title='What is NYX Trackers?' />

      <div className='about-cards'>
        {aboutCardsDataVideos.map((about_card) => {
          return (
            <DetailsCard
              key={about_card.title}
              title={about_card.title}
              video={about_card.video}
              texts={about_card.texts}
            />
          )
        })}
      </div>
    </section>
  )
}
