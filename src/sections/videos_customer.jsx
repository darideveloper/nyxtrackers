import { videos_customer_data } from '../api/videos'
import TitleSeparator from '../components/title_separator'
import VideosGrid from '../components/videos_grid'

export default function VideosCustomer () {
    return (
        <section id='videos-customer' className='regular-width'>
            <TitleSeparator title='Customer Videos' />
            <VideosGrid videos_data={videos_customer_data} />
        </section>
    )
}