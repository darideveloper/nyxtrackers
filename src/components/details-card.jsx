import PropTypes from 'prop-types'
import Video from './video'

export default function DetailsCard ({ title, video, text }) {
    return (
        <div className='details-card card'>
            <h3>{title}</h3>
            <div className="content">
                <Video video={video} />
                <p>{text}</p>
            </div>
        </div>
    )
}

DetailsCard.propTypes = {
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}