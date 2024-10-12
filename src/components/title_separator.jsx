import PropTypes from 'prop-types'

export default function TitleSeparator ({ title, is_visible }) {
    return (
        <div 
          className='title-separator'>
            <h2>{title}</h2>
            <hr/>
        </div>
    )
}

TitleSeparator.propTypes = {
    title: PropTypes.string.isRequired,
}