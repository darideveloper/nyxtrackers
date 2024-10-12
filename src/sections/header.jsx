import { useState, useContext } from "react"
import { TechnicalsContext } from "../context/technicals"

export default function Header() {

  const { setIsOpen } = useContext(TechnicalsContext)

  const [headerClass, setHeaderClass] = useState('clossed')

  function toggleMenu() {
    if (headerClass === 'clossed') {
      setHeaderClass('opened')
    } else {
      setHeaderClass('clossed')
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
              <button className="btn display clossed" onClick={toggleMenu}>
                <img src="menu_clossed_icon.svg" alt={`header menu clossed icon`} />
              </button>
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
          <button className="btn display openned" onClick={toggleMenu}>
            <img src="menu_opened_icon.svg" alt={`header menu opened icon`} />
          </button>
        </div>
      </div>
    </header>
  )
}