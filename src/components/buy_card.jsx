import PropTypes from 'prop-types'
import Button from './button'

export default function BuyCard ({name, is_new, is_available, image, price, features, buy_link}) {
    return (
        <div className="buy-card card">
            <header>
                { is_new && <span className="new">New</span> }
                { is_available && <span className="available">Available</span> }
            </header>
            <div className="content">
                <img src={image} alt={`${name} photo`} className="model-image" />
                <div className="separator"></div>
                <div className="info">
                    <h3>{name}</h3>
                    <span className="price">$ {price} usd</span>
                    <ul className="features">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <Button link={buy_link} text="Learn more &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Buy Now" />
                </div>
            </div>
        </div>
    )
}

BuyCard.propTypes = {
    name: PropTypes.string.isRequired,
    is_new: PropTypes.bool.isRequired,
    is_available: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    buy_link: PropTypes.string.isRequired,
}