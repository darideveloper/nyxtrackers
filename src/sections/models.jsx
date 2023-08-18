import { models_data } from '../api/models'
import { technicalsData } from '../api/technicals'

import TitleSeparator from '../components/title_separator'
import BuyCard from '../components/buy_card'

import { TechnicalsContext } from "../context/technicals"
import { useEffect } from 'react'
import { useContext } from "react"

export default function Models() {

  const { isOpen, setIsOpen } = useContext(TechnicalsContext)

  useEffect(() => {
    const list = document.querySelector('.list')
    if (isOpen) {
      // Get height of ul
      const ul = list.querySelector('ul')
      const height = ul.clientHeight
      
      // Update height of list
      list.style.height = `${height+40}px`
    } else {
      // Update height of list
      list.style.height = `0px`
    }
  }, [isOpen])


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
          className={`btn text ${isOpen && "isOpen"}`}
          onClick={() => setIsOpen(!isOpen)}
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