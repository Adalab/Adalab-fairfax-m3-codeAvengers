import React from 'react';
import GetAvatar from './GetAvatar';

class FillForm extends React.Component {
    render() {
        return (
            <div id="fill-container" className={`fill__form collapsible__container $`}>
                <fieldset className="fill__fieldset">
                    <label htmlFor="fullName">Nombre completo</label>
                    <input className="input-name" placeholder="Ej: Sally Jill"
                        id="fullName" type="text" name="name" required onChange={this.props.actionToChange} value={this.props.newCard.name === 'Nombre Apellido' ? '' : this.props.newCard.name} />
                    <label htmlFor="jobTitle">Puesto</label>
                    <input className="input-job" placeholder="Ej: Front-end unicorn"
                        id="jobTitle" type="text" name="job" required onChange={this.props.actionToChange} value={this.props.newCard.job === 'Front-End unicorn' ? '' : this.props.newCard.job}/>
                </fieldset>
                <fieldset className="fill__fieldset select-image">
                    <label htmlFor="selectImage">Imagen de perfil</label>
                    <GetAvatar 
                    profile={this.props.profile}
                    isAvatarDefault={this.props.isAvatarDefault}
                    updateAvatar={this.props.updateAvatar}/>
                </fieldset>
                <fieldset className="fill__fieldset">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Ej: sally-hill@gmail.com" id="email"
                        type="email" name="email" onChange={this.props.actionToChange} value={this.props.newCard.email}/>
                    <label htmlFor="phone">Teléfono</label>
                    <input placeholder="Ej: 555-55-55-55" id="phone" type="tel"
                        name="phone" onChange={this.props.actionToChange} value={this.props.newCard.phone} />
                    <label htmlFor="linkedin">Linkedin</label>
                    <input placeholder="Ej: sally.hill" id="linkedin" type="text"
                        name="linkedin"  onChange={this.props.actionToChange} value={this.props.newCard.linkedin}/>
                    <label htmlFor="github">Github</label>
                    <input placeholder="Ej: sally-hill" id="github" type="text"
                        name="github" onChange={this.props.actionToChange} value={this.props.newCard.github}/>
                </fieldset>
            </div>
        )
    }
}

export default FillForm;