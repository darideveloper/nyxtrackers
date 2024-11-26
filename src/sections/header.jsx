import { useState, useContext } from "react"
import { TechnicalsContext } from "../context/technicals"
import { Link } from "react-router"
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
          <Link className="logo" to={
            {
              pathname: "/"
            }
          }>
            <img src="logo.png" alt="NYX Trackers Logo" />
          </Link>
          <nav>
            <ul>
              <button className="btn display clossed" onClick={toggleMenu}>
                <img src="menu_clossed_icon.svg" alt={`header menu clossed icon`} />
              </button>
              <li><Link to={{
                pathname: "/",
                hash: "#about"
              }}>About Us</Link></li>


              <li><Link to={{
                pathname: "/",
                hash: "#videos-main"
              }}>Videos</Link></li>


              <li><Link to={{
                pathname: "/",
                hash: "#models"
              }}>Models</Link></li>




              <li><Link to={{
                pathname: "/",
                hash: "#testimonials"
              }}>Testimonials</Link></li>

              <li><Link to={{
                pathname: "/",
                hash: "#why-us"
              }}>Why us</Link></li>


              <li><Link to={{
                pathname: "/",
                hash: "#technicals"
              }}
                onClick={() => setIsOpen(true)}
              >Technical Specs</Link></li>

              <li><Link to="/setup" >Setup</Link></li>


              <li><Link to="/issues" >Issues</Link></li>

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