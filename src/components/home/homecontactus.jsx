import React,{Component} from 'react';
import axios from 'axios';

class HomeContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: ''
        }
    }
    componentDidMount(e) {
        let form = document.getElementById("contactForm"),
            button = document.getElementById('submit');
            button.addEventListener('click', sendMessage);
        let name=document.getElementById('name'),
            email = document.getElementById('email'),
            phone = document.getElementById('phone'),
            textArea = document.getElementById('ontactReason');

           function sendMessage(e) {
               e.preventDefault();
               form.action = "localhost:8080";
               name.innerText = ' ';
               email.innerText= " ";
               phone.innerText = " ";
               textArea.innerText = " ";
           }
    }
    render() {
    return (<section className="homemain__contact">
        <div className="homemain__contact--ctn">
            <h2 className="homemain__contact--ctn-title ">
                GET IN TOURCH
                </h2>
            <form action="#" name="contactform" id="contactForm" className='homemain__contact--ctn-form'>
                    <input type="text" name='name' id='name' placeholder='Contact Name' onChange={e => this.setState({name: e.target.value})} required/>
                    <input type="email" name='email' id='email' placeholder='Contact Email' required onChange={e => this.setState({ email: e.target.value })} />
                    <input type="tel" name='phone' id='phone' placeholder='Contact Phone' required onChange={e => this.setState({ contact: e.target.value })} />
                    <select name="service" id="service" required onChange={e => this.setState({ subject: e.target.value })}>
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
        </section>)
    }
}

export default HomeContact;