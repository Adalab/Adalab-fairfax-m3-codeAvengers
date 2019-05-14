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
    this.handlePalette = this.handlePalette.bind(this);
    this.state = {
      card:{
        name: 'Nombre completo',
        job: 'Front-End unicorn',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        paletteDefault: '1'
      } 
    }
  }

  handlerInput(event) {
    const trigger = event.currentTarget.value;
    const key = event.currentTarget.name;
    console.log(key);
    const obj = {...this.state.card, [key]: trigger}
    this.setState({card:obj});
  }

  handlePalette (event) {
    const selectedPalette = event.currentTarget.value;
    if (selectedPalette === '1') {
      console.log('1');
    }
  }

    render () {
    return <Card actionToChange={this.handlerInput} newName = {this.state.card} changeColor={this.handlePalette}/>
  }
  }

export default App;
