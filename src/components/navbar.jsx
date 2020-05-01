import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assests/images/logo1.png'


class Header extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                document.getElementById("navigation").style.top = 0;
                document.getElementById("navigation").style.marginTop = 0;
                document.getElementById("navigation").style.position = "fixed";
                document.getElementById("mobileNav").style.top = 0;
                document.getElementById("mobileNav").style.marginTop = 0;
                document.getElementById("mobileNav").style.position = "fixed";
                
            } else {
                document.getElementById("navigation").style.position = 'relative';
                document.getElementById("mobileNav").style.position = "fixed";
            }
        }

    }
    
    render() {
        const nav = [
        {menuval:'HOME'},
        {menuval:'ABOUT US'},
        {menuval:'SERVICES'},
        {menuval:'OUR WORK'},
        {menuval:'ORDER NOW'},
        {menuval:'CONTACT'}
        ],
        lang = ['Language','English','French'],
        services = ['Passport','Counterfeit Notes','IELTS & TOEFl','Residence Permit','Drivers License','ID Card','Birthcertificate'
        ];


        return  (
        <React-Fragtor>
        <header className='header'>
            <div className='header__mail'>
                <span className='header__mail-icon'>
                    <i class="fas fa-envelope"></i>
                </span> 
                <span className='header__mail-title'>
                    EMAIL
                </span>
                <span className='header__mail-email'>
                    somesomesomesomesome@email.com
                </span>
            </div>
            <div className='header__watsap'>
                <a href="https://api.whatsapp.com/send?phone=237668546654" className='header__watsap-btn' target='_blank'>
                    <span className='header__watsap-btn-icon'>
                        <i class="fab fa-whatsapp"></i>
                    </span>
                    <span className='header__watsap-btn-num'>
                        +123456789
                    </span>
                </a>
            </div>
            <div className='header__search'>
                <select className='header__search-input'>
                    {
                        lang.map(value => 
                         <option value={value} className='header__search-input-item' defaultValue={value=='Language'?true:false}>{value}</option>
                        )
                    }
                </select>
            </div>
        </header>
        {/*desktop logo */}
        <nav className="navigation" id="navigation">
            <div className="navigation__logo">
                <NavLink to='/' exact className='navigation__logo-link'>
                    <img src={logo} alt='Home' className="navigation__logo-link-img"/>
                </NavLink>
            </div>

            {/*desktop navigation*/}
            <div className="navigation__links">
                {
                    nav.map(value => 
                        value.menuval == "SERVICES"? 
                            <div className="navigation__links-ctn" id="serviceBtn" key={value.menuval}>
                            <span href="#" className='navigation__links-ctn-anchor'>
                                {value.menuval}{value.menuval=="SERVICES"?<span className="svc-ptn">&laquo;</span>:''}
                            </span>
                            <div className='services'>
                                {
                                    services.map(service => 
                                        <React-Fractor>
                                            <a href="#" className='services__link' key={service}>{service}</a>
                                        </React-Fractor>
                                    
                                    )
                                }
                            </div>
                        </div> :
                            <div className="navigation__links-ctn" key={value.menuval}>
                            <a href="#" className='navigation__links-ctn-anchor'>
                                {value.menuval}{value.menuval=="SERVICES"?<span className="svc-ptn">&laquo;</span>:''}
                            </a>
                        </div> 
                    )
                }
            </div>
        </nav>
        {/*mobile Navigation */}
        <nav className='mobilenav' id="mobileNav">
            <div className='mobilenav__background'>
            </div>
            <div className="mobilenav__logo">
                <NavLink to='/' exact className='mobilenav__logo-link'>
                    <img src={logo} alt='Home' className="mobilenav__logo-link-img"/>
                </NavLink>
            </div>
            <input type="checkbox" className="mobilenav__valid-check" id='checkBox'/>
            <label for='checkBox' className='mobilenav__valid-label'>
                <span></span>
            </label>
            {/*mobile nav declaration */}
            <div className="mobilenav__links">
                <div className='mobilenav__links--bgd'>

                </div>
                <div className="mobilenav__links--ctn">
                    {
                    /*mobile nav list */
                        nav.map(value =>
                            <div className="mobilenav__links--ctn-wrapper">
                                <a href="#" className='mobilenav__links--ctn-wrapper-anchor'>
                                    {value.menuval}
                                </a>
                            </div>
                            )
                        }
                </div>
            </div>
        </nav>
    </React-Fragtor>
    )}
}

export default Header;