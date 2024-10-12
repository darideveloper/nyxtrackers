import PropTypes from 'prop-types'
import {chibis} from '../api/chibis'

export default function Chibis () {
    return (
        <div className="chibis-wrapper">

            {chibis.map((chibi_image, index) => {
              return (
                <img className='chibi' src={chibi_image} alt={`chibi ${index + 1}`} key={index} />
              )
            })}
        </div>
    )
}