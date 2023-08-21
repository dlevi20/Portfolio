import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
    return (
        <section className="contact container" id="contact">
            <h1 className="contact-title">Kapcsolat</h1>
            <div className="contact-flex">
                <div className="contact-text">
                    <div className="contact-icons">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon fa-fw" />
                            <h4>deaklevente20@gmail.com</h4>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="contact-icon fa-fw" />
                            <h4>0670-115-0812</h4>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="contact-icon fa-fw" />
                            <h4>Debrecen</h4>
                        </div>
                    </div>
                </div>
                <form action="https://formsubmit.co/ph4ntomex@gmail.com" className="contact-form" method="POST">
                    <input type="text" name="email" placeholder="Email cím" required />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Üzenet"></textarea>
                    <button type="submit">Küldés</button>
                </form>
            </div>
        </section>
    )
}