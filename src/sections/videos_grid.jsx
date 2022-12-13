import { videos_data } from '../api/videos'
import Video from '../components/video'
import TitleSeparator from '../components/title-separator'


export default function VideosGrid () {
    return (
        <section id='videos-grid' className='regular-width'>
            <TitleSeparator title='Videos' />
            <div className="videos">
                {videos_data.map((video_file) => {
                    return (
                        <Video
                            key={video_file}
                            video={video_file}
                        />
                    )
                })}
            </div>
        </section>
    )
}