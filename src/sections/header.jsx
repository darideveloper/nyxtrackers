import { useState } from "react"
import { TechnicalsContext } from "../context/technicals"
import { useContext } from "react"

export default function Header() {

  const { setIsOpen } = useContext(TechnicalsContext)

  const [headerClass, setHeaderClass] = useState('clossed')
  const [image_button, setImageButton] = useState('menu_opened_icon.svg')

  function toggleMenu() {
    if (headerClass === 'clossed') {
      setHeaderClass('opened')
      setImageButton('menu_clossed_icon.svg')
    } else {
      setHeaderClass('clossed')
      setImageButton('menu_opened_icon.svg')
    }
  }


  return (
    <header className={`${headerClass} header`} id="header">
      <div className="bg"></div>
      <div className="content regular-width">
        <div className="content-internal">
          <a className="logo" href="#">
            <img src="logo.png" alt="NYX Trackers Logo" />
          </a>
          <nav>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#videos-grid">Videos</a></li>
              <li><a href="#models">Models</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#why-us">Why us</a></li>
              <li><a
                href="#technicals"
                onClick={() => {
                  // Open technicals
                  setIsOpen (true)
                }}
              >
                Technical Specs
              </a></li>
            </ul>
          </nav>
          <button className="btn display" onClick={toggleMenu}>
            <img src={image_button} alt={`header menu ${headerClass} icon`} />
          </button>
        </div>
      </div>
    </header>
  )
}