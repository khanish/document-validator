import React from 'react';
import mg from '../../assests/images/moneygram.jpg';
import wu from '../../assests/images/western.jpg';
import btc from '../../assests/images/bitcoin.jpg';

const Payment = () => {
    return <section className="homemain__payment">
        <h1 className="homemain__payment--title h2-title">Payment Methods</h1>
        <p className="homemain__payment--des">
            After we receive your information, you will make an upforntpaymet of 60% before we start the process. We usually take upfront payments of 100% but because of the benefits of doubt and the fake people we have decided to bring it down so that it can suit both parties. We have convinient and easy ways of payment. We accept payments through the following means
    </p>
    <div className="homemain__payment--method">
            <div className="homemain__payment--method-img">
                <img src={mg} alt="moneygram" />
            </div>
            <div className="homemain__payment--method-img">
                <img src={wu} alt="westernunion" />
            </div>
            <div className="homemain__payment--method-img">
                <img src={btc} alt='bitcoin' />
            </div>
            
    </div>
    </section>
}

export default Payment;