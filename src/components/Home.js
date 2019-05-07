import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import logoAvengers from '../images/avengers.png';

class Home extends React.Component {
  render () {
    return (
      <div className="all">
        <div className="landing__wrapper">
          <div className="landing__subwrapper">
            <header className="header__landing header__card">
              <div className="header__logo-container">
                {' '}<a href="index.html">
                  <h1
                    className="header__logo"
                    style={{backgroundImage: `url(${this.props.LogoUrl})`}}
                  >
                    Title Awesome profile-cards
                  </h1>
                </a>
              </div>
            </header>
            <main className="landing__main">
              <div className="wrapper">
                <h2 className="landing__main--title">
                  {this.props.title}
                </h2>
                <h3 className="landing__main--description">
                  Crea mejores contactos profesionales de forma fácil y cómoda
                </h3>
                <ul className="landing__list">
                  <li className="landing__list--item">
                    <div className="landing__list--img">
                      <i className="far fa-object-ungroup" />
                    </div>
                    <p className="landing__list--text">Diseña</p>
                  </li>
                  <li className="landing__list--item">
                    <div className="landing__list--img">
                      <i className="far fa-keyboard" />
                    </div>
                    <p className="landing__list--text">Rellena</p>
                  </li>
                  <li className="landing__list--item">
                    <div className="landing__list--img">
                      <i className="fas fa-share-alt" />
                    </div>
                    <p className="landing__list--text">Comparte</p>
                  </li>
                </ul>
                <div className="landing__main--link-container">
                  {' '}
                  <a href="card.html" className="landing__main--link">
                    Comenzar
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
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
      </div>
    );
  }
}

export default Home;
