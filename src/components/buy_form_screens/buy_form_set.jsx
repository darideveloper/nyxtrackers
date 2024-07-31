import { setsOptions, colorsOptions } from '../../api/buy_form'

export default function BuyFormSet() {

  console.log({setsOptions})

  return (
    <section
      className="set"
    >
      {
        setsOptions.map((set, index) => (
          <div
            key={index}
            className="set-option"
            role="button"
          >
            <img src={`/sets/${set.name} ${colorsOptions[0]}.webp`} />
            <h3>{set.name}</h3>
            <p>{set.points} points</p>
            <p>${set.price}</p>
            {
              set.recommended 
              &&
              <p className='tag'>Recommended</p>
            }
          </div>
        ))
      }
    </section>
  )
}