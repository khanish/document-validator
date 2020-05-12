import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            contact: '',
            massage: ''
        }
    }
    render() {
        return (<React-Fractor>
            <header className="contacthead">
                <div className='contacthead__img--ctn'></div>
                <div className="contacthead__overlay"></div>
                <h1 className="contacthead__title h1-title">Contact US</h1>
                <span href='#' className='contacthead__order-btn'><i class="fas fa-home"> HOME/ <span>CONTACT US</span></i></span>
            </header>
            <section className="contact">
                <section className="contact__addr">
                    <p className="contact__addr--title">Office Location</p>
                    <p className="contact__addr--des"><span className="contact__addr--des-icon"><i class="fas fa-map-marked-alt"></i></span><span className="contact__addr--des-des">525 Grundy Street, Baltinore, MD, 21224 <br /> USA</span></p>
                    <p className="contact__addr--title">Office Hours</p>
                    <p className=""><span className="contact__addr--des-icon"><i class="fas fa-clock"></i></span><span className="contact__addr--des-des">All Day 24/7</span></p>
                    <p className="contact__addr--title">Phone</p>
                    <p className=""><span className="contact__addr--des-icon"><i class="fas fa-phone"></i></span><span className="contact__addr--des-des">+123-456-789</span></p>
                    <p className="contact__addr--title">Email</p>
                    <p className=""><span className="contact__addr--des-icon"><i class="fas fa-at"></i></span><span className="contact__addr--des-des">someemail@mail.com</span></p>
                </section>
                <div className="contact__ctn">
                    <h2 className="contact__ctn-title ">
                        GET IN TOURCH
                </h2>
                    <form action="#" name="contactform" id="contactForm" className='contact__ctn-form'>
                        <input type="text" name='name' id='name' placeholder='Contact Name' onChange={e => this.setState({ name: e.target.value })} required />
                        <input type="email" name='email' id='email' placeholder='Contact Email' required onChange={e => this.setState({ email: e.target.value })} />
                        <input type="tel" name='phone' id='phone' placeholder='Contact Phone' required onChange={e => this.setState({ contact: e.target.value })} />
                        <select name="service" id="service" required onChange={e => this.setState({ subject: e.target.value })} >
                            <option value="Passport">Passport</option>
                            <option value="Driver License">Diver License</option>
                            <option value="Counterfiet Note">Counterfiet Note</option>
                            <option value="ID Cards">ID Cards</option>
                            <option value="IELTS & TOEFL">IELTS & TOEFL</option>
                            <option value="ESB Certificate">ESB Certificates</option>
                            <option value="Birth certificate">Birth Certificate</option>
                            <option value="Residence Permit">Residence Permit</option>
                        </select>
                        <textarea name="contactreason" id="contactReason" cols="30" rows="10" required onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <button type='submit' name='submit' id='submit'>SENT MESSAGE</button>
                    </form>
                </div>
            </section>
        </React-Fractor>)
    }
    
}

export default Contact;