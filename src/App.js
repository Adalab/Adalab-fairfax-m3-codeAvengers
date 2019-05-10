import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import Card from './components/Card.js';
import logo from './images/awesome-logo.svg';


// class App extends React.Component {
//   render () {
//   return <Home LogoUrl={logo} title='Crea tu tarjeta de visita' subtitle='Crea mejores contactos profesionales de forma fácil y cómoda' logoAdalab={logoAdalab} logoAvengers={logoAvengers}/>
// }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlerInput = this.handlerInput.bind(this);
    this.state = {
      name: 'Nombre completo',
      job: 'Front-End unicorn',
    }
  }

  handlerInput(event) {
    const trigger = event.currentTarget.value;
    const key = event.currentTarget.name;
    console.log(key);
    this.setState({
      [key]: trigger,
    });
  }

    render () {
    return <Card actionToChange={this.handlerInput} newName = {this.state}/>
  }
  }

export default App;
