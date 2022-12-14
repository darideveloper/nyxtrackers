import { links_socials_data } from '../api/links'

export default function Socials() {
    return (
        <div className="socials" id='socials'>
            { links_socials_data.map ( (social, index) => (
                <a href={social.link} key={index} target="_blank">
                    <img src={social.image} alt={social.title} />
                </a>
            )) }
        </div>
    )
}