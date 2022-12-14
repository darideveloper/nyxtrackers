import PropTypes from 'prop-types'

export default function InfoCard({ icon, title, text }) {

    let full_alt_text = `${title} ${text}`
    if (full_alt_text.length > 30) {
        full_alt_text = title
    }

    return (
        <div className='card info-card'>
            <img
                src={icon}
                alt={`${full_alt_text} icon`}
                className='icon'
            />
            <div className='separator'></div>
            <div className='text'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

InfoCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
