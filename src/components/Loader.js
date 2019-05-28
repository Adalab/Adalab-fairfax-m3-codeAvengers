import React from 'react';
import logoAvengers from '../images/avengers.png';

class Loader extends React.Component {
    render() {
        return (
        <React.Fragment>
        <img src={logoAvengers} alt="Logo Avengers" className="loader__img" />
        <p className="loader__text">Creando tu tarjeta...</p>
        </React.Fragment>
        )
    }
}

export default Loader;