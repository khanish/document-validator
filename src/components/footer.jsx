import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return <section className="footer">
        <section className="footer__about">
            <h2 className="footer__about--title h2-title">About Us</h2>
            <p className="footer__about--del">
                We Are One Of The Most Leading Service Providers For Buying Real Or Fake Documents Online.We Are Top Sellers Of Real And Fake Documents,Best Sellers Of Real And Fake Documents.With The Group Of Talented Experts And Team, We Are Running The Firm Successfully Till Now. More Number Of International Clients Have Worked With Us And Gained A Great Result.
            </p>
        </section>
        <section className="footer__links">
            <h2 className="footer__links--title h2-title">
                Quick Links
            </h2>
                <table className="footer__links--table">
                    <tr className="footer__links--table-row">
                        <td className="footer__links--table-row-cell"><NavLink to="/services/passport">Buy Fake Passport</NavLink></td>
                    <td className="footer__links--table-row-cell"><NavLink to="/services/driver-license">Buy Fake Drivers License</NavLink></td>
                    </tr>
                    <tr className="footer__links--table-row">
                    <td className="footer__links--table-row-cell"><NavLink to="/services/counterfeit-note">Buy Fake Counterfiet Notes</NavLink></td>
                    <td className="footer__links--table-row-cell"><NavLink to="/services/id-card">Buy Fake ID Cards</NavLink></td>
                    </tr>
                    <tr className="footer__links--table-row">
                    <td className="footer__links--table-row-cell"><NavLink to="/services/ielts-and-toefl">Buy Fake IELTS & TOEFL</NavLink></td>
                    <td className="footer__links--table-row-cell"><NavLink to="/services/birthcertificate">Buy Fake Birth Certificates</NavLink></td>
                    </tr>
                    <tr className="footer__links--table-row">
                    <td className="footer__links--table-row-cell"><NavLink to="/services/residence-permit">Buy Fake Residence Permit</NavLink></td>
                        <td className="footer__links--table-row-cell"></td>
                    </tr>
                </table>
        </section>
        <section className="footer__contact">
            <h2 className="footer__contact--title h2-title">
                CONTACT INFO
            </h2>
            <section className="footer__contact--del">
                <span><i class="fas fa-map-signs"></i></span><address>525 Grundy Street, Baltinore, MD 21224, USA</address>
            </section>
            <section className="footer__contact--del">
                <span><i class="fas fa-phone-volume"></i></span><address>+1 (623) 282-1536</address>
            </section>
            <section className="footer__contact--del">
                <span><i class="fas fa-at"></i></span><address>someemail@mail.com</address>
            </section>
        </section>
        <section className="footer__social">
            <a href="facebook.com"><i class="fab fa-facebook-square"></i></a>
            <a href="facebook.com"><i class="fab fa-instagram-square"></i></a>
        </section>
    </section>
}

export default Footer;