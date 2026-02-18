import PropTypes from 'prop-types'

export default function Image({ image }) {
  return (
    <div className='zoom-wrapper'>
      <img
        src={image}
        alt='image of custom product'
        loading='lazy'
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
}
