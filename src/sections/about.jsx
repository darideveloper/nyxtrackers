import { about_cards_data } from '../api/about'
import TitleSeparator from '../components/title-separator'
import DetailsCard from '../components/details-card'

export default function About() {
    return (
        <section
            className='regular-width'
            id='about'
        >
            <TitleSeparator title='What is NYX Trackers?' />

            <div className='about-cards'>
                {about_cards_data.map((about_card) => {
                    return (
                        <DetailsCard
                            key={about_card.title}
                            title={about_card.title}
                            video={about_card.video}
                            text={about_card.text}
                        />
                    )
                })}
            </div>
        </section>
    )
}
