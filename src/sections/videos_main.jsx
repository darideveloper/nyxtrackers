import { videos_main_data } from '../api/videos'
import TitleSeparator from '../components/title_separator'
import VideosGrid from '../components/videos_grid'

export default function VideosMain () {
    return (
        <section id='videos-main' className='regular-width'>
            <TitleSeparator title='Videos' />
            <VideosGrid videos_data={videos_main_data} />
        </section>
    )
}