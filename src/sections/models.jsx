import { models_data } from '../api/models'
import TitleSeparator from '../components/title_separator'
import BuyCard from '../components/buy_card'

export default function Models () {
    return (
        <div id="models" className="regular-width">
            <TitleSeparator title="Models" />

            <div className="models-wrapper">
                {models_data.map((model, index) => (
                    <BuyCard key={index} {...model} />
                ))}
            </div>
        </div>
    )
}