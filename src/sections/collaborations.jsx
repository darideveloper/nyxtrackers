import { collaborations } from '../api/collaborations'
import TitleSeparator from '../components/title_separator'

export default function Collaborations () {
    return (
        <section id='collaborations' className='regular-width'>
            <TitleSeparator title='Collaborations' />
            
            <div className="content">
              {collaborations.map (({name, image, link}, index) => (
                <a className="collaboration" key={index} href={link} target="_blank">
                  <img src={image} alt={`image of the collaboration with ${name}`} />
                  <h3>{name}</h3>
                </a>
              ))}
            </div>

        </section>
    )
}