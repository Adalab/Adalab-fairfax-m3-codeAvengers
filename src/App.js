import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import logo from './images/awesome-logo.svg';
import logoAdalab from './images/logo-adalab.png';
import logoAvengers from './images/avengers.png';

class App extends React.Component {
  render () {
  return <Home LogoUrl={logo} title='Crea tu tarjeta de visita' subtitle='Crea mejores contactos profesionales de forma fácil y cómoda' logoAdalab={logoAdalab} logoAvengers={logoAvengers}/>
}
}

export default App;
