import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header__landing header__card">
        <div className="header__logo-container">
          <Link to="/">
            <h1 className="header__logo">Title Awesome profile-cards</h1>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
