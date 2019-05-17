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
  constructor (props) {
    super (props);
    this.handlerInput = this.handlerInput.bind (this);
    this.handlePalette = this.handlePalette.bind (this);
    this.handleCollapsibles = this.handleCollapsibles.bind(this);
    this.state = {
      card: {
        name: 'Nombre completo',
        job: 'Front-End unicorn',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        paletteDefault: 'option1',
      },
      collapsible: {
        design: true,
        fill: false,
        share: false,
      },
    };
  }

  handlerInput (event) {
    const trigger = event.currentTarget.value;
    const key = event.currentTarget.name;
    console.log (key);
    const obj = {...this.state.card, [key]: trigger};
    this.setState ({card: obj});
  }

  handlePalette (event) {
    const selectedPalette = event.currentTarget.value;
    if (selectedPalette === '1') {
      this.setState ({card: {...this.state.card, paletteDefault: 'option1'}});
    } else if (selectedPalette === '2') {
      this.setState ({card: {...this.state.card, paletteDefault: 'option2'}});
    } else {
      this.setState ({card: {...this.state.card, paletteDefault: 'option3'}});
    }
  }

  handleCollapsibles (event) {
    const selectedCollapsible = event.currentTarget.id;
    const newCollapsible = {
      design: false,
      fill: false,
      share: false,
    }
    if(this.state.collapsible[selectedCollapsible] === true) {
      this.setState({
        collapsible: {...newCollapsible, [selectedCollapsible]: false}
      })
    } else {
      this.setState({
        collapsible: {...newCollapsible, [selectedCollapsible]: true}
      })
    }
  }

  render () {
    return (
      <Card
        actionToChange={this.handlerInput}
        newName={this.state.card}
        changeColor={this.handlePalette}
        actionToCollapsibles={this.handleCollapsibles}
        collapsibleValue={this.state.collapsible}
      />
    );
  }
}

export default App;
