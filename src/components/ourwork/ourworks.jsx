import React, {Component} from 'react';
import HomeContact from '../home/homecontactus';
import money5 from '../../assests/images/money5.jpeg';
import money6 from '../../assests/images/money6.jpeg'
import money7 from '../../assests/images/money7.jpeg';
import money8 from '../../assests/images/money8.jpeg';
import money9 from '../../assests/images/money9.jpeg';
import money10 from '../../assests/images/money10.jpeg';
import money11 from '../../assests/images/money11.jpeg';
import money12 from '../../assests/images/money12.jpeg';
import money13 from '../../assests/images/money13.jpeg';

let OurWork = () => {
    let pictures = [money5,money6, money7,money8,money9,money10,money11,money12,money13]
    return <React-Fractor>
                <header className="abouthead">
                    <div className='abouthead__img--ctn'></div>
                    <div className="abouthead__overlay"></div>
                    <h1 className="abouthead__title h1-title">OUR WORKS</h1>
                    <span href='#' className='abouthead__order-btn'><i class="fas fa-home"> HOME/ <span>OUR WORKS</span></i></span>
                </header>
                <section className="ourworks__main">
                    {
                        pictures.map(value => <img src = {value} alt = 'ourwork' width='300' height='300'/>)
                    }
                </section>
                <HomeContact />
        </React-Fractor>
}

export default OurWork;