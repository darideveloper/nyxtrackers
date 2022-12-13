import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

export default function Video({ video }) {
    const [play, setPlay] = useState(false)

    return (
        <div className='video-wrapper'>
            <div className='play-icon'>
                {/* Show play icon only in pause state  */}
                {!play && (
                    <img
                        src='play_icon.svg'
                        alt='play video icon'
                    />
                )}
            </div>
            <video
                onMouseOver={(e) => {
                    setPlay(true)
                    e.target.play()
                }}
                onMouseLeave={(e) => {
                    setPlay(false)
                    e.target.pause()
                }}
                onLoadedData={(e) => {
                    e.target.pause()
                }}
                muted
                autoPlay
            >
                <source
                    src={video}
                    type='video/mp4'
                />
            </video>
        </div>
    )
}

Video.propTypes = {
    video: PropTypes.string.isRequired,
}
