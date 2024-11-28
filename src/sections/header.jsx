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

  const homeLinks = [
    {
      "text": "About Us",
      "path": "/",
      "hash": "#about",
      "onClick": null,
    },
    {
      "text": "Videos",
      "path": "/",
      "hash": "#videos-main",
      "onClick": null,
    },
    {
      "text": "Models",
      "path": "/",
      "hash": "#models",
      "onClick": null,
    },
    {
      "text": "Testimonials",
      "path": "/",
      "hash": "#testimonials",
      "onClick": null,
    },
    {
      "text": "Why us",
      "path": "/",
      "hash": "#why-us",
      "onClick": null,
    },
    {
      "text": "Technical Specs",
      "path": "/",
      "hash": "#technicals",
      "onClick": () => setIsOpen(true),
    },
  ]

  const pagesLinks = [
    {
      "text": "Setup",
      "path": "/setup",
      "hash": ""
    },
    {
      "text": "Issues",
      "path": "/issues",
      "hash": ""
    }
  ]

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

              {/* Render home sections links */}
              {
                homeLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={{
                        pathname: link.path,
                        hash: link.hash
                      }}
                      onClick={() => {
                        toggleMenu()
                        if (link.onClick) {
                          link.onClick()
                        }
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))
              }

              {/* Render pages links */}
              {
                pagesLinks.map((link, index) => (
                  <li key={index}>
<<<<<<< HEAD
                    <Link className="page-link" 
=======
                    <Link 
>>>>>>> c2b4b36c302c3aacaca81109518c1c32f5e164c8
                      to={link.path}
                      onClick={() => toggleMenu()}>
                      {link.text}
                    </Link>
                  </li>
                ))
              }


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