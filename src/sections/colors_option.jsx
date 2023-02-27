import { colors_image } from '../api/colors'
import TitleSeparator from '../components/title_separator'


export default function ColorOptions () {
    return (
        <section id='colors-options' className='regular-width'>
            <TitleSeparator title='Color Options' />
            <div className="img-wrapper">
              <img src={colors_image} alt="color options" />
            </div>
        </section>
    )
}