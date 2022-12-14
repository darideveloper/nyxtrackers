export default function Header () {
    return (
        <header className="clossed" id="header">
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
                        </ul>
                    </nav>
                    {/* <button className "btn display">
                        <svg>
                            <use xlink:href="#svg-arrow"></use>
                        </svg>
                    </button> */}
                </div>
            </div>
        </header>
    )
}