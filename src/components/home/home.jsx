import React, {Component} from 'react';
import HomeMain from './homemain';
import Testimoney from './hometesti';
import Payment from './payment';
import HomeContact from './homecontactus';
import {NavLink} from 'react-router-dom'
/*import moneyImg from '../../assests/images/money2.jpg';
import passportImg from '../../assests/images/passport2.jpg';
import licenseImg from '../../assests/images/license1.jpg';*/
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            ids: "money",
            animate: "money 3s ease",
            header: '',
            headerId: 'orderMoney',
            btnId: 'orderMoney',
            headerAnimate: 'money-head .5s ease-in',
            btnAnimate: 'order-money .5s ease-out .2s',
        }
        this.headers = [
            {
                title: 'We Provide', id: 'moneyTitle', btnId: 'orderMoney', headerAnimate: 'money-head .5s ease-in', btnAnimate: 'order-money .5s ease-out .2s' },
            {
                title: 'Buy', id: 'passportTitle', btnId: 'orderPassport', headerAnimate: 'passport-head .5s ease-in',
                btnAnimate: 'order-passport .5s ease-out .2s' },
            { 
                title: 'Buy ',   id: 'licenseTitle', btnId: 'orderLicense',headerAnimate: 'license-head .5s ease-in',
                btnAnimate: 'order-license .5s ease-out .2s' }
        ]
        
    }

    changeState = () => {
        let [moneyhead, passportHead, licenseHead] = this.headers;
        this.setState({num: this.state.num + 1 });
        if (this.state.num == 1) {
            this.setState({ids: "money", animate: "money 3s ease", header: moneyhead.title, headerId: moneyhead.id, btnId: moneyhead.btnId, headerAnimate: moneyhead.headerAnimate, btnAnimate: moneyhead.btnAnimate });
        }
        else if(this.state.num == 2) {
            this.setState({ ids: 'passport', animate: "passport 3s ease", header: passportHead.title, headerId: passportHead.id, btnId: passportHead.btnId, headerAnimate: passportHead.headerAnimate, btnAnimate: passportHead.btnAnimate});
        }
        else if(this.state.num == 3) {
            this.setState({ ids: 'license', animate: "license 3s ease", header: licenseHead.title, headerId: licenseHead.id, btnId: licenseHead.btnId, headerAnimate: licenseHead.headerAnimate, btnAnimate: licenseHead.btnAnimate });
        }
        else if(this.state.num == 4) {
            this.state.num = 0
        }
    }

    componentDidMount() {
        let circle1 = document.getElementById('circle1'),
            circle2 = document.getElementById('circle2'),
            circle3 = document.getElementById('circle3');
        setInterval(function () {
            circle1.style.border = '5px solid #0D9CD2'
            setTimeout(
                function () {
                    circle1.style.border = '5px solid #cfcfcf';
                }, 3000
            )
        }, 9000);
        setInterval(
            () => {
                circle2.style.border = '5px solid #cfcfcf';
                setTimeout(
                    function () {
                        circle2.style.border = '5px solid #0D9CD2';
                    }, 3000);
                setTimeout(
                    () => {
                        circle2.style.border = '5px solid #cfcfcf';
                    }, 6000
                )
            }, 9000);
        setInterval(function () {
            circle3.style.border = '5px solid #cfcfcf';
            setTimeout(
                function () {
                    circle3.style.border = '5px solid #0D9CD2'
                }, 6000)
        }, 9000);
        setInterval(
            () => {
                this.changeState()
            }, 3000
        )
    }
    
    render() {
        return(
        <React-Fractor>
            <header className="homeHead">
                <div className='homeHead__img--ctn' style={{animation:this.state.animate}} id={this.state.ids}>
                </div>
                <div className="homeHead__overlay">
                    <div class="circle" id="circle1"></div>
                    <div class="circle" id="circle2"></div>
                    <div class="circle" id="circle3"></div>
                </div>
                    <h1 className="homeHead__title h1-title" style={{ animation: this.state.headerAnimate }} id={this.state.headerId}>{this.state.header} {this.state.header == 'We Provide' ? <span><mark>Counterfeit</mark> Notes</span> : " "}{this.state.header == 'Buy' ? <span><mark>Real & Legit</mark> Passport</span> : " "}{this.state.header == 'Buy ' ? <span><mark>Fake & Real</mark> Drivers Lisence</span> : " "}</h1>
                <NavLink to="/make-an-order" className='homeHead__order-btn' id={this.state.btnId} style={{ animation: this.state.btnAnimate }}>Place An Order</NavLink>
            </header>
            <div className='homeBody'>
                <HomeMain />
            </div>
            <div className="hometesty">
                <Testimoney />
            </div>
            <div className="homepayment">
                <Payment />
            </div>
            <div className="homepayment">
                <HomeContact />
            </div>
        </React-Fractor>
        )
    }
    
}


export default Home;