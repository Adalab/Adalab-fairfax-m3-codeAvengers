import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import Card from './components/Card.js';
import DefaultImage from './components/DefaultImage';
import logo from './images/awesome-logo.svg';
import logoAdalab from './images/logo-adalab.png';
import logoAvengers from './images/avengers.png';
import {Route, Switch} from 'react-router-dom';
import {fetchData} from './services/DataServices';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlerInput = this.handlerInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsibles = this.handleCollapsibles.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.sendRequest = this.sendRequest.bind(this);

    this.state = {
      card: {
        name: 'Nombre Apellido',
        job: 'Front-End unicorn',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: 1,
        photo: DefaultImage
      },
      collapsible: 'design',
      isAvatarDefault: true,
      dataURL: ''
    };
  }

  saveStorage () {
    localStorage.setItem('userInfo', JSON.stringify(this.state));
  }
  componentDidMount () {
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUserInfo !== null) {
      this.setState ({
        card: {...savedUserInfo.card},
        collapsible: savedUserInfo.collapsible,
        isAvatarDefault: savedUserInfo.isAvatarDefault
      })
    }
  }
  componentDidUpdate () {
    this.saveStorage()
  }

  updateAvatar(img) {
    const {card} = this.state;
    this.setState(prevState => {
      const newProfile = {...card, photo: img};
      return {
        card: newProfile,
        isAvatarDefault: false
      }
    });
  }

  handlerInput(event) {
    const trigger = event.currentTarget.value;
    const key = event.currentTarget.name;
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
        palette: 1,
        photo: DefaultImage

      },
      collapsible: 'design',
      isAvatarDefault: true
    })
  }

  sendRequest(event){
    event.preventDefault();
      
      fetchData(this.state.card)
      .then(data => {
        this.setState({dataURL: data.cardURL})
      
       console.log(data);

              
       if (data.success === false){
         alert(`No has rellenado todos los campos ${data.error}`);
       }
      });
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
              actionReset={this.handleReset}
              actionToChange={this.handlerInput}
              newCard={this.state.card}
              changeColor={this.handlePalette}
              actionToCollapsibles={this.handleCollapsibles}
              collapsibleValue={this.state.collapsible}
              profile={this.state.card.photo}
              isAvatarDefault={this.state.isAvatarDefault}
              updateAvatar={this.updateAvatar} 
              sendRequest = {this.sendRequest}
              dataURL = {this.state.dataURL}/>
          )} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
