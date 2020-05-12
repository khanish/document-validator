import React, {Component} from 'react';
import peter from '../../assests/images/Petter.jpg';
import shally from '../../assests/images/Shally.jpg';
import team from '../../assests/images/team.jpg';
import calvin from '../../assests/images/Calvin.jpg';


class Testimoney extends Component {
    constructor(props) {
        super(props);
        this.testifies= [
            { src: peter, testimony: 'I bought a passport from this company and it was delivered on time as committed. Thank you Documents Facilitators you guys are so loyal', key: 1, id: 'Peter' },
            { src: shally, testimony: 'On a more serious note I must confess your level of professionlism is so great. I enjoyed your 24/7 availabilty when and willingness to assist at all time. Thank you Documents Facilitator', key: 2, id: 'Shally' },
            { src: team, testimony: 'Greetings! I got my US passport as I ordered. You guys are the best. Thanks so much', key: 3, id: 'Thelma' },
            { src: calvin, testimony: 'Hi! this is Calvin from USA I got my drivers license from your comapny. I appreciate your geniuness. Thank you', key: 4, id: 'Calvin' }
        ];
        this.state = {
            numTes: 0,
            testifierSrc: this.testifies[0].src,
            testifierDet: this.testifies[0].testimony,
            testifierId: this.testifies[0].id
        }
        
    }
    changeTestifier = () => {
        this.setState({ numTes: this.state.numTes + 1 })
        if (this.state.numTes === 1) {
            this.setState({
                testifierSrc: this.testifies[1].src,
                testifierDet: this.testifies[1].testimony,
                testifierId: this.testifies[1].id
            })
        }
        else if(this.state.numTes === 2) {
                this.setState({
                    testifierSrc: this.testifies[2].src,
                    testifierDet: this.testifies[2].testimony,
                    testifierId: this.testifies[2].id
                })
            }
        else if (this.state.numTes === 3) {
                this.setState({
                    testifierSrc: this.testifies[3].src,
                    testifierDet: this.testifies[3].testimony,
                    testifierId: this.testifies[3].id
                })
            }
        else if (this.state.numTes === 4) {
                this.setState({
                    testifierSrc: this.testifies[0].src,
                    testifierDet: this.testifies[0].testimony,
                    testifierId: this.testifies[0].id
                    })
                }
        else if (this.state.numTes === 5) {
            this.state.numTes = 0
                }
    }
    componentDidMount() {
        setInterval(
            () => {
                this.changeTestifier()
            }, 6000
        )
        
    }

    render() {
        return(
            <section className="homemain__testimonies">
                <div className="homemain__testimonies--overlay"> 
                </div>
                <h2 className='homemain__testimonies--title h2-title'>Testimonies</h2>
                <p className="homemain__testimonies--des">
                    Nothing makes us happier than hearing how happy we make you. So please feel free to always contact us to let us know how we did make you happy or rather your experience with us regarding the production of your document.
                </p> 
                    <div className="homemain__testimonies--testifier" id={this.state.testifierId}>
                    <img src={this.state.testifierSrc} alt="testifier" className="homemain__testimonies--testifier-img"/>
                        <p className="homemain__testimonies--testifier-detail">
                        {this.state.testifierDet}
                        </p>
                        <p className="homemain__testimonies--testifier-name">{this.state.testifierId}</p>
                    </div>
            </section>
            
        )
    }
}

export default Testimoney;