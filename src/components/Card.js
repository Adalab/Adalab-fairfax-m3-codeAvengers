import React from 'react';
import Header from './Header';
import Collapsible from './Collapsible';

class Card extends React.Component {
    render() {
        return (
            <div className="card__body" id="card__body">
                <Header />
                <Collapsible />
                <footer className="footer-container">
                    <div className="footer-container__wraper">
                        <p className="footer__text">Awesome profile cards &copy2018</p> <a href="https://github.com/Adalab/fairfax-m2-catchFire"
                            target="_blank"><img src="assets/images/catch-fire.png" alt="logo grupo Catch Fire" className="footer__fire" /></a>

                        <a
                            href="https://adalab.es/" className="footer__link" target="_blank">
                            <img src="assets/images/logo-adalab.png" alt="logo adalab" className="footer__img" />
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Card;