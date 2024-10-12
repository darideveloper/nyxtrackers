import PropTypes from 'prop-types'

export default function Button ({link, text, onClick}) {

    let content
    if (link) {
        // Link with botton style
        content = <a href={link} className="btn text">{text}</a>
    } else {
        // Button
        content = <button className="btn text" onClick={onClick}>{text}</button>
    }

    return content
}

Button.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
}