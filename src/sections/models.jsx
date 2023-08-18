import { models_data } from '../api/models'
import { technicalsData } from '../api/technicals'

import TitleSeparator from '../components/title_separator'
import BuyCard from '../components/buy_card'

import { useState, useEffect } from 'react'

export default function Models() {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const list = document.querySelector('.list')
    if (active) {
      // Get height of ul
      const ul = list.querySelector('ul')
      const height = ul.clientHeight
      
      // Update height of list
      list.style.height = `${height+40}px`
    } else {
      // Update height of list
      list.style.height = `0px`
    }
  }, [active])


  return (
    <div id="models" className="regular-width">
      <TitleSeparator title="Models" />

      <div className="models-wrapper">
        {models_data.map((model, index) => (
          <BuyCard key={index} {...model} />
        ))}
      </div>

      <div className="technicals" id="technicals">

        <button
          className={`btn text ${active && "active"}`}
          onClick={() => setActive(!active)}
        >
          Tracker Technical Specs
        </button>

        <div className={`list`}>
          <ul>
            {technicalsData.map((technical, index) =>
              <li key={index}>{technical}</li>
            )}
          </ul>
        </div>

      </div>

    </div>
  )
}