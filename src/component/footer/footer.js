import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: ["tim108 icon ion-md-mail", "tim108 icon ion-md-call"],
            heading: ["Send me an email!", "Give me a ring"],
            content: ["nguyendanhthanh980@gmail.com", "+(84)-978605073"]
        }
    }
    render() {
        const contactMe = this.state.icon.map((value, index) => 
        <div key={index.toString()} className="tim105"><div className="tim106"><div className="tim107"><i className={value}></i></div><div className="tim109"><h4 className="tim110">{this.state.heading[index]}</h4></div></div><div className="tim111"><span className="tim112">{this.state.content[index]}</span></div></div>
        );
        return (
            <div className="tim98">
                <div className="tim99">
                    <div className="tim100">
                        <h2 className="tim101">Get in Touch</h2>
                        <h5 className="tim102">You need more information? Contact me!</h5>
                    </div>
                </div>
                <div className="tim103">
                    <div className="tim104">
                        {contactMe}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
