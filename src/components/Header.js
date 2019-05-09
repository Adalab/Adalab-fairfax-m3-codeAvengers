import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header__landing header__card">
        <div className="header__logo-container">
          <a href="index.html">
            <h1 className="header__logo">Title Awesome profile-cards</h1>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
