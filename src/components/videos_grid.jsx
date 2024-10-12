import Video from './video'

export default function VideosGrid ({videos_data}) {
    return (
        <div className="grid">
            {videos_data.map((video_file) => {
                return (
                    <Video
                        key={video_file}
                        video={video_file}
                    />
                )
            })}
        </div>
    )
}