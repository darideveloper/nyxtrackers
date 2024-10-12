import { personalization_data } from '../api/personalization'
import Image from '../components/image'
import TitleSeparator from '../components/title_separator'


export default function Personalization () {
    return (
        <section id='personalization' className='regular-width'>
            <TitleSeparator title='Customer Personalization' />
            <div className="grid">
                {personalization_data.map((image_file) => {
                    return (
                        <Image
                            key={image_file}
                            image={image_file}
                        />
                    )
                })}
            </div>
        </section>
    )
}