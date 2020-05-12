import React from 'react';
import HomeContact from '../home/homecontactus';
import money from '../../assests/images/money.jpeg';
import passportImg from '../../assests/images/Buy-fake-documents.png';


class AboutUs extends React.Component {
    render() {
        return (
            <React-Fractor>
                <header className="abouthead">
                    <div className='abouthead__img--ctn'></div>
                    <div className="abouthead__overlay"></div>
                    <h1 className="abouthead__title h1-title">ABOUT US</h1>
                    <span href='#' className='abouthead__order-btn'><i class="fas fa-home"> HOME/ <span>ABOUT US</span></i></span>
                </header>
                <section className='aboutmain'>
                    
                    <section className='aboutmain__ctn'>
                        <section className='aboutmain__ctn-del'>
                            <h2 className='aboutmain__ctn-del-title h2-title'>
                                <span>We Pro</span>vide Real And Fake Documents Online
                            </h2>
                            <p>
                                We Are One Of The Most Leading Service Providers For Buying Real Or Fake Documents Online. We Are Top Sellers Of Real And Fake Documents,Best Sellers Of Real And Fake Documents. With The Group Of Talented Experts And Team, We Are Running The Firm Successfully Till Now. More Number Of International Clients Have Worked With Us And Gained A Great Result. Those Who Are Looking For The High Quality Visas, Diploma Certificates, University Degrees, And Driving License, Scannable Passports, College Certificates, ID Cards, IELTS And Much More Can Sure Hire Us. Reaching Our Service Is Very Simple And Also The Payment Options Have Been Offered On The Payment Page Very Effectively. In Case You Are Not Satisfied With Our Work, Refund Policy Is Also Available Here For You.
                            </p>
                        </section>
                        <img src={money} alt='money' width={400} height={400} className="aboutmain__ctn-img"/>
                    </section>
                    <p className='aboutmain__del'>
                        Affordable, Discreet, Superior Quality And Unbeatable Service. We Strive To Excel And Exceed Your Expectations And We Make Sure Your Information Is 100% SECURITY Is Guaranteed To All Our Clients As We Keep All Our Clients Information Encrypted And Safe In The Cloud. Your New Authentic Scannable Passports, Drivers License, Visas, College Certificate, University Degree And Diploma, IELTS, Id Cards, We Use High Quality Equipment And Materials To Produce Authentic And Fake Passports Buy Real And Fake Documents,IELTS Certificates Have Been Registered In The British Council Database System And Can Be Verified Online. Within A Few Clicks, You Can Purchase The Required Documents. We Mainly Provide Reliable And High Quality Fake ID Which Helps You Go Out With Your Friends And Buy Everything You Require. All The Documents We Provide Are Machine-Readable And Data Scannable. Through The Help Of UV Light, Real Or Fake Documents Will Be Created. Once You Send The Document To Your Location, We Provide A Tracking Number To The Clients.
                    </p>
                    <p className='aboutmain__del'>
                        We Give You The Assurance That Your Documents Will Be Ready On Time And Our Trained Experts Will Work Hard To Deliver It Before The Delivery Date. There Will Be No Chance Of Time Getting Extended From Our Service. Till Now We Have Never Face Any Issues And Complaints From Clients. It Is Mainly Because They Are Satisfied With Our Work. Our Support Team Is Also Available For You 24x7 And You Can Ask Your Queries Whenever You Have. Mainly We Are Experts In Producing Top Notch Quality Passport And Driving License In A Most Enhanced Manner. You Can Also Use This Document Legally And Take It Everywhere. The Fake Driving License, Passport Or Other Documents We Provide Are Very Much Similar To The Real Document. No One Can Able To Find The Difference. We Will Keep Your Information Secure And Private. Hence, You No Need To Worry About The Secured Information.
                    </p>
                </section>
                <section className="aboutwhatwedo">
                    <ul className="aboutwhatwedo__list">
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Passport.
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Drivers Licence
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Counterfeit Notes
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Id Cards
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Ielts & TOEFL
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake ESB Certificates
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Birth Certificate
                        </li>
                        <li className="aboutwhatwedo__list--item">
                            At Documents Facilitator We Are Professionally Skilled In Providing Real & Fake Residents Permit
                        </li>
                    </ul>
                    <img src={passportImg} alt="passport" className="aboutwhatwedo__img" width={400}
                        height={400} />
                </section>
                <HomeContact />
            </React-Fractor>
        )
    }
}
export default AboutUs;