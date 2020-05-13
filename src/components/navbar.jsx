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
                document.getElementById("navigation").style.top = '0';
                document.getElementById("navigation").style.marginTop = 0;
                document.getElementById("navigation").style.paddingTop = '2rem';
                document.getElementById("navigation").style.height = '7rem';
                document.getElementById("navigation").style.position = "fixed";
                
            } else {
                document.getElementById("navigation").style.position = 'relative';
                document.getElementById("navigation").style.top = '0';
                document.getElementById("navigation").style.paddingTop = '0';
                document.getElementById("navigation").style.height = '4rem';
            }

        }
        const home = document.getElementById('HOME'),
        aboutUs = document.getElementById('ABOUT-US'),
        serviceRen = document.getElementById('SERVICES'),
        ourWork = document.getElementById('OUR-WORK'),
        orderNow = document.getElementById('ORDER-NOW'),
        contact = document.getElementById('CONTACT'),
        passport = document.getElementById('Passport'),
        counterfiet = document.getElementById('Counterfeit-Notes'),
        ieltsToefl = document.getElementById('IELTS-And-TOEFL'),
        residence = document.getElementById('Residence-Permit'),
        license = document.getElementById('Drivers-License'),
        idCard = document.getElementById('ID-Card'),
        birthcert = document.getElementById('Birthcertificate'),
        mobileNavLink = document.getElementById('mobileNavLink'),
        checkBox = document.getElementById('checkBox'),
        menuBtn = document.getElementById('menuBtn');
        let num = 0;
        let incMenuSub = 0;


        let showBody = [home, aboutUs, ourWork, orderNow, contact],
        menuSub = [passport, counterfiet, ieltsToefl, residence,license, idCard,birthcert],
        menuItems = [home, aboutUs, serviceRen, ourWork, orderNow, contact];
        //show menu on tablet
        function tabletMenu() {
            mobileNavLink.style.width = '400px';
            mobileNavLink.style.height = '100vh';
            mobileNavLink.style.paddingTop = '2rem';
            mobileNavLink.style.paddingBottom = '1rem';
        }
        //show menu on mobile
        function mobileMenu() {
            mobileNavLink.style.paddingTop = '4rem';
            mobileNavLink.style.paddingBottom = '1rem';
            mobileNavLink.style.width = '100%';
            mobileNavLink.style.height = '100vh';
        }
        //hide menu mobile and tablet
        function hideMenu() {
            if (window.matchMedia('(min-width: 601px) and (max-width: 850px)').matches) {
                checkBox.checked = false;
                mobileNavLink.style.width = 0;
                num = 0;
                menuSub.forEach(value =>
                    value.style.display = 'none'
                );
            }
            else if (window.matchMedia('(max-width: 600px)').matches) {
                mobileNavLink.style.width = '100%';
                mobileNavLink.style.paddingBottom = 0;
                mobileNavLink.style.paddingTop = 0;
                setTimeout(() => {
                    mobileNavLink.style.height = 0;
                    checkBox.checked = false;
                }, 200)
                num = 0;
                menuSub.forEach(value =>
                    value.style.display = 'none'
                );
            }
        }
        menuBtn.addEventListener('click', function() {
            num++
            if (num === 1) {
                if (window.matchMedia('(min-width: 601px) and (max-width: 850px)').matches) {
                    checkBox.checked = true;
                    tabletMenu()
                    num++;
                }
                else if (window.matchMedia('(max-width: 600px)').matches) {
                        checkBox.checked = true;
                        mobileMenu();
                        num++;
                }
            }
            if(num === 3) {
                hideMenu()
                
            }
        });
        showBody.forEach(
            value =>
                value.addEventListener('click', function() {
                    hideMenu()
                    num = 0;
                })
            );
        serviceRen.addEventListener('click', function() {
            incMenuSub++;
            if (incMenuSub === 1) {
                mobileNavLink.style.height = '100vh';
                mobileNavLink.style.paddingTop = '1rem';
                menuSub.forEach(value => {
                    value.style.display = 'block';
                    value.style.marginTop = '.5rem';
                    value.style.marginBottom = '.5rem';
                    value.style.textDecoration = 'none';
                    }
                );
                incMenuSub++;
            }
            if(incMenuSub === 3) {
                if(window.matchMedia('(min-width: 601px) and (max-width: 850px)')) {
                    tabletMenu()
                    menuSub.forEach(value =>
                        value.style.display = 'none'
                    );
                    incMenuSub = 0;
                }
                else if (window.matchMedia('(max-width: 600px)')) {
                    mobileMenu()
                    menuSub.forEach(value =>
                        value.style.display = 'none'
                    );
                    incMenuSub = 0;
                }

            }
        });
        menuSub.forEach(value =>
                value.addEventListener('click', function() {
                    hideMenu();
                    incMenuSub = 0;
                })
            ) 
    }
    
    render() {
        const nav = [
            {menuval:'HOME', to: '/'},
            { menuval: 'ABOUT US', to: '/about-us'},
            { menuval: 'SERVICES', to: '/service'},
            { menuval: 'OUR WORK', to: '/our-works'},
            { menuval: 'ORDER NOW', to: '/place-order'},
            { menuval: 'CONTACT', to: '/contact-us'}
        ],
        lang = ['Language','English','French'],
        services = [
            {value:'Passport', to:'/services/passport'},
            {value:'Counterfeit Notes', to:'/services/counterfeit-note'},
            {value:'IELTS & TOEFl', to:'/services/ielts-and-toefl'},
            {value:'Residence Permit', to:'/services/residence-permit'},
            {value:'Drivers License', to:'/services/driver-license'},
            {value:'ID Card', to:'/services/id-card'},
            {value:'Birthcertificate',to:'/services/birthcertificate'}
        ];

        let serviceMerger = [
            { value: 'HOME', to: '/' },
            { value: 'ABOUT-US', to: '/about-us' },
            { value: 'SERVICES', to: '/service' },
            { value: 'Passport', to: '/services/passport' },
            { value: 'Counterfeit-Notes', to: '/services/counterfeit-note' },
            { value: 'IELTS-And-TOEFL', to: '/services/ielts-and-toefl' },
            { value: 'Residence-Permit', to: '/services/residence-permit' },
            { value: 'Drivers-License', to: '/services/driver-license' },
            { value: 'ID-Card', to: '/services/id-card' },
            { value: 'Birthcertificate', to: '/services/birthcertificate' },
            { value: 'OUR-WORK', to: '/our-works' },
            { value: 'ORDER-NOW', to: '/place-order' },
            { value: 'CONTACT', to: '/contact-us' }
            
        ]
        console.log(serviceMerger);
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
                                            <NavLink to={service.to} className='services__link' key={service.value}>{service.value}</NavLink>
                                        </React-Fractor>
                                    
                                    )
                                }
                            </div>
                        </div> :
                            <div className="navigation__links-ctn" key={value.menuval}>
                                <NavLink to={value.to} className='navigation__links-ctn-anchor'>
                                    {value.menuval}{value.menuval=="SERVICES"?<span className="svc-ptn">&laquo;</span>:''}
                                </NavLink>
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
                <NavLink to='/' exact className='mobilenav__logo-link' >
                    <img src={logo} alt='Home' className="mobilenav__logo-link-img"/>
                </NavLink>
            </div>
            <input type="checkbox" className="mobilenav__valid-check" id='checkBox'/>
            <label className='mobilenav__valid-label' id='menuBtn'>
                <span></span>
            </label>
            {/*mobile nav declaration */}
            <div className="mobilenav__links" id="mobileNavLink">
                    {
                    /*mobile nav list */
                        serviceMerger.map(value =>
                            value.value == "SERVICES" ?
                                <span className='mobilenav__links--service' key={value.e} id={value.value}>
                                        {value.value}
                                    </span> :
                                <NavLink to={value.to} className='mobilenav__links--anchor' key={value.value} id={value.value}>
                                    {value.value}
                                </NavLink>
                            )
                        }
            </div>
        </nav>
    </React-Fragtor>
    )}
}

export default Header;