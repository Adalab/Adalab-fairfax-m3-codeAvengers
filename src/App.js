import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import logo from './images/awesome-logo.svg';

class App extends React.Component {
  render () {
  return <Home LogoUrl={logo} title='Crea tu tarjeta de visita' />
}
}

export default App;
