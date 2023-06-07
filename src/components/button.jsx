import PropTypes from 'prop-types'

export default function Button ({link, text}) {

    let content
    if (link) {
        // Link with botton style
        content = <a href={link} className="btn text">{text}</a>
    } else {
        // Button
        content = <button className="btn text">{text}</button>
    }

    return content
}

Button.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
}