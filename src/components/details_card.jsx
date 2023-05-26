import PropTypes from 'prop-types'
import Video from './video'
import Chibis from './chibis'

export default function DetailsCard({ title, video, texts }) {
  return (
    <div className='details-card card'>
      <h3>{title}</h3>
      <div className="content">
        <Video video={video} />
        <p className="texts">
          {texts.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
          <div className="white-spaces">
            <br />
            <br />
          </div>
        </p>
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