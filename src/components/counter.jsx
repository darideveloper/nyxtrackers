import PropTypes from 'prop-types'

export default function Counter ({ icon, counter, title}) {
    return (
        <div className='counter'>
            <img src={icon} alt={`${title} counter icon`} className="counter-icon" />
            <div className="separator"></div>
            <h3>
                <span className="counter-number">{counter}</span>
                <span className="counter-title">{title}</span>
            </h3>
        </div>
    ) 
}

Counter.propTypes = {
    icon: PropTypes.string.isRequired,
    counter: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}