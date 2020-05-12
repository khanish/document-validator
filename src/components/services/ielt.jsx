import React from 'react';
import birthcert from '../../assests/images/ielts.jpg';
import HomeContact from '../home/homecontactus';

function Ielts() {
    return <React-Fractor>
        <header className="servicesbirthcerthead">
            <div className='servicesbirthcerthead__img--ctn'></div>
            <div className="servicesbirthcerthead__overlay"></div>
            <h1 className="servicesbirthcerthead__title h1-title">IELTS & TOEFL</h1>
            <span href='#' className='servicesbirthcerthead__order-btn'><i class="fas fa-home"> HOME/ <span>SERVICES/</span> <span>IELTS & TOEFL</span></i></span>
        </header>
        <section className="services">
            <section className='services-des'>

                <section className='services-des__ctn'>
                    <section className='services-des__ctn-del'>
                        <h2 className='services-des__title h2-title'>
                            Buy Fake IELTS & TOEFL Certificates Online
                        </h2>
                        Buy TOEFL, IELTS Certificates without Exam. We, Valid Documents Producer can provide you a real IELTS & TOEFL Certificate in a comfortable manner. You have to choose between the two module programs for the IELTS Certificate. The two-module programs are general or academic training. After you picked the needed module program, our stall will take you via the modalities and procedure step by step until you get that certificate. We will require your detailed information at that time. Hence you have to send us your detailed information so that we can able to understand what to put on that certificate.
                    </section>
                    <img src={birthcert} alt='money' width={200} height={300} />
                </section>
                <p className='services-des__main'>
                    Buy original TOEFL certificate Online, IELTS & TOEFL CERTIFICATES.Through our service, your certificate will become an original one and the information will be clearly registered on the database system. It will also be verified online in the most advanced manner. You can able to effectively make use of the certificate for getting admission into universities that require this kind of certificate. Along with that, you can also able to make use of the certificate for applying for the visa too. It will take around 8 days for the certificate to complete and you will get the complete legal documentation that admits your eligibility. The IELTS & TOEFL certificate will consist of the needed score to you require and we will need you to identify by sections the marks you require to get.
                </p>
                <p className='services-des__main'>
                    IELTS TOEFL Certificate Online, provide real register IELTS TOEFL Certificate. Buy TOEFL, IELTS Certificates.The certificate which we are creating will have your photo, name, date of birth, sign and much more. So, you can able to use this certificate without any issues and you can use it anytime and anywhere you want without any hesitation. We mainly encourage our European learners, Middle East Learners and Asian learners to make use of this program, since they can benefit from our reliable and most ultimate service. So, your wait is over now!!! Just make use of our service now.
                </p>
            </section>
        </section>

        <HomeContact />
    </React-Fractor>
}
export default Ielts;