import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    const {LogoUrl, title, subtitle} = this.props;
    return (
      <div className="all">
        <div className="landing__wrapper">
          <div className="landing__subwrapper">
            <header className="header__landing header__card">
              <div className="header__logo-container">
                {' '}<a href="index.html">
                  <h1
                    className="header__logo"
                    style={{backgroundImage: `url(${LogoUrl})`}}
                  >
                    Title Awesome profile-cards
                  </h1>
                </a>
              </div>
            </header>
            <main className="landing__main">
              <div className="wrapper">
                <h2 className="landing__main--title">
                  {title}
                </h2>
                <h3 className="landing__main--description">
                  {subtitle}
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
                  <Link to="/card" className="landing__main--link">Comenzar</Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  LogoUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Home;
