/* Modules */
import React, { Component } from 'react';

/* Images */
import images from '../../images/images';

/*Styles */
import './Footer.css';

class Footer extends Component {
    state = {}

    render() {
        return (
            <footer className="Footer">
                <div className="Footer-item">
                    <div>
                        <strong>
                            E-book Store
                        </strong>
                    </div>
                    <div>
                        Powered by EBANX  •  Products B2B
                    </div>
                </div>
                <div className="Footer-item">
                    <img src={images.CardsFooter} alt="Cards footer"/>
                </div>
            </footer>
        );
    }
}

export default Footer;