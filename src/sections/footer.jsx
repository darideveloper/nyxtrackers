import { payments_data, links_socials_data, links_legal_data, contact_email } from "../api/links"

export default function Footer () {
    return (
        <footer id="footer" className="full-width">
            <div className="content regular-width">
                <div className="content-internal">
                    <section className="top">
                        <section className="left">
                            {links_socials_data.map ((social, index) => (
                                <a href={social.link} key={index}>{social.title}</a>
                            ))}
                        </section>
                        <section className="right">
                            {links_legal_data.map ((legal, index) => (
                                <a href={legal.link} key={index}>{legal.title}</a>
                            ))}
                        </section>
                    </section>
                    <hr />
                    <section className="buttom">
                        <address>
                            <a href={`mailto:${contact_email}`}>{contact_email}</a>
                            <p>© 2022 by NYX Trackers</p>
                            <p>Powered by <a href="mailto:darideveloper@gmail.com">Dari Developer</a> </p>
                        </address>
                        <div className="payments">
                            {payments_data.map ((payment, index) => (
                                <img src={payment.image} alt={payment.name} title={payment.name} key={index} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}