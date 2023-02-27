import PropTypes from 'prop-types'
import Video from './video'
import Chibis from './chibis'

export default function DetailsCard ({ title, video, texts }) {
    return (
        <div className='details-card card'>
            <h3>{title}</h3>
            <div className="content">
                <Video video={video} />
                <div className="texts">
                    {texts.map ((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <Chibis />
            </div>
        </div>
    )
}

DetailsCard.propTypes = {
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    texts: PropTypes.array.isRequired,
}