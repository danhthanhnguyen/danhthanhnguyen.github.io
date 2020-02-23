import React from 'react';
import blinkist from '../../image/blinkist.jpg';
import blueapron from '../../image/blueapron.jpg';
import brilliant from '../../image/brilliant.jpg';
import expressvpn from '../../image/expressvpn.jpg';
import skillshare from '../../image/skillshare.jpg';
import hostinger from '../../image/hostinger.jpeg';

class ListPartners extends React.Component {
    render() {
        return (
            <div className="tim150">
                <div className="tim151">
                    <a className="tim152" href={this.props.Link} target="_blank" rel="noopener noreferrer">
                        <img className="tim153" src={this.props.Image} alt=""/>
                    </a>
                </div>
                <div className="tim154">
                    <div className="tim155">
                        <div className="tim156">
                            <h2 className="tim157">{this.props.Company}</h2>
                        </div>
                        <div className="tim158">
                            <span className="tim159">{this.props.Description}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: ["https://www.blinkist.com/", "https://www.blueapron.com/", "https://brilliant.org/", "https://www.expressvpn.com/", "https://www.skillshare.com/", "https://www.hostinger.com/"],
            logo: [blinkist, blueapron, brilliant, expressvpn, skillshare, hostinger],
            nameCompany: ["blinkist", "blue apron", "brilliant", "expressvpn", "skillshare", "hostinger"],
            description: ["Blinkist lets you read the key lessons from 3000+ nonfiction books in 15 min or fewer. Start your free trial today and find out how.", "Blue Apron makes cooking fun and easy. We'll provide you with all the ingredients that you need to make a delicious meal in exactly the right proportions.", "Get started with Brilliant’s course library as a beginner, or dive right into the intermediate and advanced courses for professionals and lifelong learners.", "Top rated VPN for 2020. Unblock websites & protect all your devices. 24/7 support. VPN for Windows, Mac, Android, iOS, routers & more. Try 30 days risk-free.", "Skillshare is a learning platform with online classes taught by the world's best practitioners. Personalized, on-demand learning in design, photography.", "Our mission is to make life easier for website developers and their customers. We do it by offering easy to use, fast and reliable web hosting services."]
        }
    }
    render() {
        const elementPartners = this.state.links.map((value, index) =>
        <ListPartners key={index.toString()} Link={value} Image={this.state.logo[index]} Company={this.state.nameCompany[index]} Description={this.state.description[index]}/>);
        return (
            <div className="tim148">
                <div className="partner-heading">
                    <h1 className="content-heading">Past Partners</h1>
                </div>
                <div className="tim149">
                    {elementPartners}
                </div>
            </div>
        );
    }
}
export default Partners;