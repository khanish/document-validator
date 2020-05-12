import React from 'react';
import birthcert from '../../assests/images/idcard.jpg';
import HomeContact from '../home/homecontactus';

function Idcard() {
    return <React-Fractor>
        <header className="servicesbirthcerthead">
            <div className='servicesbirthcerthead__img--ctn'></div>
            <div className="servicesbirthcerthead__overlay"></div>
            <h1 className="servicesbirthcerthead__title h1-title">ID CARDS</h1>
            <span href='#' className='servicesbirthcerthead__order-btn'><i class="fas fa-home"> HOME/ <span>SERVICES/</span> <span>ID-CARDS</span></i></span>
        </header>
        <section className="services">
            <section className='services-des'>

                <section className='services-des__ctn'>
                    <section className='services-des__ctn-del'>
                        <h2 className='services-des__title h2-title'>
                            Buy Real And Fake ID Cards Online
                        </h2>
                        We at Valid Documents Producer are one of the leading producers of real database registered ID cards. Novelty Fake IDs for sale, We work hard in offering both real and fake ID cards in an effective manner. We are having all kinds of sophisticated possibilities to provide officially registered ID cards. Hence you can able to easily buy the verified and real ID cards through our firm. In order to produce the real ID cards, we will register your complete information into the database. After that, when the ID card is checked in the data reading machine means then it will show up in the system. And then you can legally use that document.
                    </section>
                    <img src={birthcert} alt='money' width={300} height={200} />
                </section>
                <p className='services-des__main'>
                    Buy SSN I.D Cards Online,Buy Fake ID Cards Online.We also provide a scannable novelty fake ID’s cards,fake ID card which will have a similar look of the real ID card. But at the time of creating a fake ID, none of the data will be registered in the database system. You don’t need to get tense, because all the key features of the real ID has been imprinted and duplicated on the fake ID card. Hence, if you want to legally use your document, it is better to go with the real ID card. The whole real IDs we are registering can able to be verified at anytime and anywhere.
                </p>
                <p className='services-des__main'>
                    We will also produce Fake ID cards for those who have lost their wallets and documents along with the ID card. If you are the one among them, then sure you can hire us and our skilled experts will help you a lot in satisfying your needs. Our service is very much efficient and most ultimate. Mainly we will contact the suitable administrative authorities or experts for you and follow the right procedures. Our major motive is to make your purchase very fast and simple as much as possible. We take pride in serving you and satisfying your major requirements.
                </p>
            </section>
        </section>

        <HomeContact />
    </React-Fractor>
}
export default Idcard;