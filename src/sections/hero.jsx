import { hero_gallery_data, hero_counters_data } from '../api/hero'
import SplideGallery from '../components/splide_gallery'
import Counter from '../components/counter'

export default function Hero() {
    return (
        <section
            className='regular-width'
            id='hero'
        >
            <SplideGallery
                images_data={hero_gallery_data}
                options={{
                    autoplay: true,
                    type: 'loop',
                }}
            />
            <div className='counters-wrapper'>
                {hero_counters_data.map((counter_data) => {
                    return (
                        <Counter
                            key={counter_data.title}
                            icon={counter_data.icon}
                            counter={counter_data.counter}
                            title={counter_data.title}
                        />
                    )
                })}
            </div>
        </section>
    )
}
