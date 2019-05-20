import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import Card from './components/Card.js';
import logo from './images/awesome-logo.svg';
import logoAdalab from './images/logo-adalab.png';
import logoAvengers from './images/avengers.png';
import { Route, Switch } from 'react-router-dom';

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
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsibles = this.handleCollapsibles.bind(this);

    this.state = {
      card: {
        name: 'Nombre Apellido',
        job: 'Front-End unicorn',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: 1
      },
      collapsible: 'design'
    };
  }

  handlerInput(event) {
    const trigger = event.currentTarget.value;
    const key = event.currentTarget.name;
    console.log(key);
    const obj = { ...this.state.card, [key]: trigger };
    this.setState({ card: obj });
  }

  handlePalette(event) {
    const selectedPalette = parseInt(event.currentTarget.value);
    if (selectedPalette === 1) {
      this.setState({ card: { ...this.state.card, palette: 1 } })
    } else if (selectedPalette === 2) {
      this.setState({ card: { ...this.state.card, palette: 2 } })
    } else {
      this.setState({ card: { ...this.state.card, palette: 3 } })
    }
  }

  handleCollapsibles(event) {
    const selectedCollapsible = event.currentTarget.id;
    this.setState(prevState => {
      if (selectedCollapsible === prevState.collapsible) {
        return {
          collapsible: null
        }
      } else {
        return {
          collapsible: selectedCollapsible
        }
      }
    })
  }



  handleReset(event) {
    this.setState({
      card: {
        name: 'Nombre Apellido',
        job: 'Front-End unicorn',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: 1
      }
    })
  }

  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route exact path='/' render={routerProps => (
            <Home match={routerProps.match} LogoUrl={logo} title='Crea tu tarjeta de visita' subtitle='Crea mejores contactos profesionales de forma fácil y cómoda' logoAdalab={logoAdalab} logoAvengers={logoAvengers} />
          )} />
          <Route path='/card' render={routerProps => (
            <Card match={routerProps.match}
              actionToChange={this.handlerInput}
              newCard={this.state.card}
              changeColor={this.handlePalette}
              actionToCollapsibles={this.handleCollapsibles}
              collapsibleValue={this.state.collapsible} />
          )} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
