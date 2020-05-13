import React from 'react';
import {NavLink} from 'react-router-dom';

const HomaMain = () => {
    let services = [
        { title: 'Real & Fake Passport', cont: 'We Valid Documents Producer Are Professionally Skilled In Providing Real & Fake Passport.', readmeUrl: '/services/passport'},
        { title: 'Real Drivers Licence', cont: 'We Offers You A Great Opportunity To Directly Get A Fake And Real Drivers License From Us.', readmeUrl: '/services/driver-license' },
        { title: 'Buy Counterfeit Notes', cont: 'Counterfeit Notes For Sale Even Though We Are Offering All Kinds Of Fake Money Online.', readmeUrl: '/services/counterfeit-note' },
        { title: 'Fake & Real Id Cards', cont: 'We Are One Of The Leading Producers Of Real Database Registered ID Cards,Buy Fake Id Cards.', readmeUrl: '/services/id-card' },
        { title: 'Buy Ielts & TOEFL', cont: 'Buy TOEFL,IELTS Certificates Without Exam.We Can Provide You IELTS & TOEFL Certificate.', readmeUrl: '/services/ielts-and-toefl' },
        { title: 'Buy Fake Certificates', cont: 'Certificate Is Proof You Are The One Who Is Having Knowledge Of Running A Core Business.', readmeUrl: '/services/ielts-and-toefl' },
        { title: 'Buy Birth Certificate', cont: 'Valid Documents Producer Are Professionally Skilled In Real & Fake Birth Certificate.', readmeUrl: '/services/birthcertificate' },
        { title: 'Buy Residents Permit', cont: 'We Are Leading Provider For Production Of Fake And Real Resident Permit Online.', readmeUrl: '/services/residence-permit'}
    ]
    return <React-Fractor>
                <h2 className="homemain__header h2-title">Buy Real Registered and Novelty Passports Online</h2>
                <p className="homemain__para">
                    Welcome to our discreet, affordable, unbeatable and excellent service. We are excel and highly skilled in providing you real and fake documents. We guarantee 100% security service to each and every client. It can be possible via maintaining the client information safe and encrypted in the cloud. We work hard to meet your expectations and also you no need to worry about the security issues. We are responsible for providing you an authentic driving license, scannable passports, college certificate, visas, diploma certificate, university degree, ID cards, IELTS and much more. Buy real registered and novelty passports online, purchase registered and unregistered passport of all countries, visas, biometric passport,Novelty Passports and New Identity Packages.At Support Migrants Worldwide, we use high quality equipment and materials to produce authentic and fake passports. All secret features of real passports are carefully duplicated for our Registered and unregistered passports. Buy Registered and unregistered South African passports. Buy Registered and unregistered Australian passport, Buy Registered and unregistered Canadian passports, Buy Registered and unregistered French(France) passports, Buy Registered and unregistered Dutch(Netherland/Holland) passports, Buy Registered and unregistered German(Germany) passports, Buy Registered and unregistered UK(United Kingdom) passport.
                </p>
                <section className="homemain__services">
                    <h2 className="homemain__services--title h2-title">OUR SERVICES</h2>
                    {
                        services.map(
                            service => 
                            <div className="homemain__services--card" key={service.title}>
                                <div className="homemain__services--card-icon">
                                        {service.title === 'Real & Fake Passport'? <i class="fas fa-passport"></i>:" "}
                                        {service.title === 'Real Drivers Licence' ? <i class="fas fa-address-card"></i>:" "}
                                        {service.title === 'Buy Counterfeit Notes' ? <i class="fas fa-money-bill-alt"></i> : " "}
                                        {service.title === 'Fake & Real Id Cards' ? <i class="fas fa-address-card"></i> : " "}
                                        {service.title === 'Buy Ielts & TOEFL' ? <i class="fas fa-certificate"></i> : " "}
                                        {service.title === 'Buy Fake Certificates' ? <i class="fas fa-certificate"></i> : " "}
                                        {service.title === 'Buy Birth Certificate' ? <i class="fas fa-certificate"></i> : " "}
                                        {service.title === 'Buy Residents Permit' ? <i class="fas fa-id-badge"></i> : " "}
                                </div>
                                <h3 className="homemain__services--card-title">
                                    {service.title}
                                </h3>
                                <p className="homemain__services--card-cont">
                                    {service.cont}
                                </p>
                                <NavLink to={service.readmeUrl} className="homemain__services--card-detail">Read More</NavLink>
                            </div>
                        )
                    }
                </section>
    </React-Fractor>

}

export default HomaMain;