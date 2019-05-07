import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import logo from './images/awesome-logo.svg';

class App extends React.Component {
  render () {
  return <Home LogoUrl={logo} />
}
}

export default App;
