import React from 'react';
import GetAvatar from './GetAvatar';
import PropTypes from 'prop-types';

class FillForm extends React.Component {
    render() {
        const {actionToChange, newCard, isAvatarDefault,updateAvatar, profile} = this.props;
        return (
            <div id="fill-container" className={`fill__form collapsible__container $`}>
                <fieldset className="fill__fieldset">
                    <label htmlFor="fullName">Nombre completo</label>
                    <input className="input-name" placeholder="Ej: Sally Jill"
                        id="fullName" type="text" name="name" required onChange={actionToChange} value={newCard.name === 'Nombre Apellido' ? '' : newCard.name} />
                    <label htmlFor="jobTitle">Puesto</label>
                    <input className="input-job" placeholder="Ej: Front-end unicorn"
                        id="jobTitle" type="text" name="job" required onChange={actionToChange} value={newCard.job === 'Front-End unicorn' ? '' : newCard.job}/>
                </fieldset>
                <fieldset className="fill__fieldset select-image">
                    <label htmlFor="selectImage">Imagen de perfil</label>
                    <GetAvatar 
                    profile={profile}
                    isAvatarDefault={isAvatarDefault}
                    updateAvatar={updateAvatar}/>
                </fieldset>
                <fieldset className="fill__fieldset">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Ej: sally-hill@gmail.com" id="email"
                        type="email" name="email" onChange={actionToChange} value={newCard.email}/>
                    <label htmlFor="phone">Teléfono</label>
                    <input placeholder="Ej: 555-55-55-55" id="phone" type="tel"
                        name="phone" onChange={actionToChange} value={newCard.phone} />
                    <label htmlFor="linkedin">Linkedin</label>
                    <input placeholder="Ej: sally.hill" id="linkedin" type="text"
                        name="linkedin"  onChange={actionToChange} value={newCard.linkedin}/>
                    <label htmlFor="github">Github</label>
                    <input placeholder="Ej: sally-hill" id="github" type="text"
                        name="github" onChange={actionToChange} value={newCard.github}/>
                </fieldset>
            </div>
        )
    }
}

FillForm.propTypes = {
    actionToChange: PropTypes.func,
    newCard: PropTypes.object,
    isAvatarDefault: PropTypes.bool,
    updateAvatar: PropTypes.func,
    profile: PropTypes.string
}

export default FillForm;