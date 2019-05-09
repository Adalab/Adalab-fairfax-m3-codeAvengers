import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import logoAvengers from '../images/avengers.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-container__wraper">
                    <p className="footer__text">Awesome profile cards &copy2018</p>
                    {' '}
                    <a
                        href="https://github.com/Adalab/fairfax-m2-catchFire"
                        target="_blank"
                    >
                        <img
                            src={logoAvengers}
                            alt="logo grupo Catch Fire"
                            className="footer__fire"
                        />
                    </a>
                    <a
                        href="https://adalab.es/"
                        className="footer__link"
                        target="_blank"
                    >
                        <img src={logoAdalab} alt="logo adalab" className="footer__img" />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
