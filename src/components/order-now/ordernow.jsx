import React from 'react';
import passport from '../../assests/images/passport-photo.jpg';
import finger from '../../assests/images/finger-print.jpg';
import signature from '../../assests/images/signature.jpg';
import axios from 'axios';

const API_PATH = 'http://localhost/api/contact/index.php';
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        this.state = {
            fname : "",
            mname : '',
            lname : '',
            email : '',
            addressone : '',
            addresstwo: '',
            city : '',
            state: '',
            postalcode: '',
            country: '',
            placeofbirth: '',
            height: '',
            gender: '',
            contact: '',
            whatsapp: '',
            signature: null,
            passport: null,
            fingerprint: null,
            mailSent: false,
            error: null
        };
        this.inputs = [
            { type: "text", name: "fname", id: 'orderFName', placeholder: "First Name", class: 'orderForm__input', require: "required", value: this.state.fname, setchanges: e => this.setState({fname: e.target.value})},
            { type: "text", name: "mname", id: 'orderMName', placeholder: "Middle Name", class: 'orderForm__input', require: "", value: this.state.mname, setchanges: e => this.setState({ mname: e.target.value }) },
            { type: "text", name: "lname", id: 'orderLName', placeholder: "Last Name", class: 'orderForm__input', require: "required", value: this.state.lname, setchanges: e => this.setState({ lname: e.target.value }) },
            { type: "email", name: "email", id: 'orderEmail', placeholder: "E-Mail", class: 'orderForm__input', require: "required", value: this.state.email, setchanges: e => this.setState({ email: e.target.value }) },
            { type: "text", name: "addressone", id: 'orderAddressOne', placeholder: "Address Line One", class: 'orderForm__input', require: "required", value: this.state.addressone, setchanges: e => this.setState({ addressone: e.target.value }) },
            { type: "text", name: "addresstwo", id: 'orderAddressTwo', placeholder: "Address Line Two", class: 'orderForm__input', require: "", value: this.state.addresstwo, setchanges: e => this.setState({ addresstwo: e.target.value }) },
            { type: "text", name: "city", id: 'orderCity', placeholder: "City", class: 'orderForm__input', require: "", value: this.state.city, setchanges: e => this.setState({ city: e.target.value }) },
            { type: "text", name: "state", id: 'orderState', placeholder: "State / Region /Province", class: 'orderForm__input', require: "", value: this.state.state, setchanges: e => this.setState({ state: e.target.value }) },
            { type: "text", name: "postalcode", id: 'postalCode', placeholder: "Postal / Zip Code", class: 'orderForm__input', require: "", value: this.state.postalcode, setchanges: e => this.setState({ postalcode: e.target.value }) },
            { type: "text", name: "country", id: 'orderCountry', placeholder: "Country", class: 'orderForm__input', require: "", value: this.state.country, setchanges: e => this.setState({ country: e.target.value }) },
            { type: "text", name: "placeofbirth", id: 'orderPlaceOfBirth', placeholder: "Place of Birth", class: 'orderForm__input', require: "", value: this.state.placeofbirth, setchanges: e => this.setState({ placeofbirth: e.target.value })},
            { type: "text", name: "yourheight", id: 'orderHeight', placeholder: "Your Hight", class: 'orderForm__input', require: "", value: this.state.height, setchanges: e => this.setState({ height: e.target.value })},
            { type: "text", name: "gender", id: 'orderGender', placeholder: "Gender", class: 'orderForm__input', require: "", value: this.state.gender, setchanges: e => this.setState({ gender: e.target.value }) },
            { type: "tel", name: "contact", id: 'orderContact', placeholder: "Phone", class: 'orderForm__input', require: "required", value: this.state.contact, setchanges: e => this.setState({ contact: e.target.value }) },
            { type: "tel", name: "whatsapp", id: 'orderWhatsApp', placeholder: "Whatsapp", class: 'orderForm__input', require: "required", value: this.state.whatsapp, setchanges: e => this.setState({ whatsapp: e.target.value }) },
            { type: "file", id: 'orderSignature', placeholder: "Upload Signature", class: 'orderForm__input', require: "required", label: "Your Signature", value: this.state.signature, setchanges: e => this.setState({ signature: e.target.files[0] }) },
            { type: "file", id: 'orderPassport', placeholder: "Passport Photo", class: 'orderForm__input', require: "required", label: "Passport Photo", value: this.state.passport, setchanges: e => this.setState({passport: e.target.files[0]})},
            { type: "file", id: 'orderFingerPrint', placeholder: "Finger Print", class: 'orderForm__input', require: "required", label: "Finger Print", value: this.state.fingerprint, setchanges: e => this.setState({fingerprint: e.target.files[0] }) },
        ];
        
    }
    handleFileSubmit(file1, file2, file3) {
        const fd1 = new FormData(),
            fd2 = new FormData(),
            fd3 = new FormData();
        fd1.append('signature', file1);
        fd2.append('passport', file2);
        fd3.append('fingerprint', file3);
        axios.post('http://localhost/api/contact/index.php', fd1, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        axios.post('http://localhost/api/contact/index.php', fd2, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        axios.post('http://localhost/api/contact/index.php', fd3, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }
    handleFormSubmit(event) {
        event.preventDefault();
        let res = this.handleFileSubmit(this.state.signature, this.state.passport, this.state.fingerprint);
    }


    render() {
        return(
        <React-Fractor>
            <header className="orderhead">
                <div className='orderhead__img--ctn'></div>
                <div className="orderhead__overlay"></div>
                <h1 className="orderhead__title h1-title">PLACE AN ORDER</h1>
                <span href='#' className='orderhead__order-btn'><i class="fas fa-home"> HOME/ <span>ORDER</span></i></span>
            </header>
            <section className="order">
                <p className="order__main--explain">
                    The Documents We Produce, In Case Of Any Loses Or They Are Being Stolen We Can Provide You With A New One And If Your Documents Are Expired We Can Renew. Fill This Form And Get Your Documents Ready
            </p>
                <section className="order-ctn">
                        <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
                        </div>
                    <form action="#" name="ordername" id="orderForm" className="orderForm">
                            {this.inputs.map(value => (value.id === 'orderSignature') || (value.id === "orderPassport") || (value.id === 'orderFingerPrint') ? <div key={value.id}><label for={value.id} className="orderForm__label">{value.label}</label><input type={value.type} name={value.name} id={value.id} placeholder={value.placeholder} className="orderForm__file" required={value.require} value={value.value} onChange={value.setchanges}/></div> :
                            <input key={value.id} type={value.type} name={value.name} id={value.id} placeholder={value.placeholder} className={value.class} required={value.require} onChange={value.setchanges}/>)}
                            <input type="submit" value="SUBMIT ORDER" id="orderSubmit" className="orderForm__submit" onClick={e => this.handleFormSubmit(e)} />
                    </form>
                    <p className='order__privacy'>
                        * We don’t share your information with anyone. It is our policy to keep our clients informations confidential.
                </p>
                </section>
                <section className="order__sample">
                    <p>Example on how photo, signature and fingerprint has to look like.</p>
                    <img src={signature} alt='signature' />
                    <img src={passport} alt='passport' />
                    <img src={finger} alt='finger print' />
                </section>
            </section>

        </React-Fractor>
        )
    }
    
}

export default Order;