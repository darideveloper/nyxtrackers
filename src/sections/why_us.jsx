import InfoCard from '../components/info_card'
import { why_us_data } from '../api/why_us'
import TitleSeparator from '../components/title_separator'


export default function WhyUs () {

    return (
        <section
            className='regular-width'
            id='why-us'
        >
            <TitleSeparator title='Why Us?' />

            <div className='info-cards-wrapper'>
                {why_us_data.map((why_us_data, index) => {
                    return (
                        <InfoCard 
                            key={index}
                            title={why_us_data.title}
                            text={why_us_data.text}
                            icon={why_us_data.icon}
                        />
                    )
                })}
            </div>
        </section>
    )
}