import React from 'react';

class Preview extends React.Component {
    render() {
        return (
            <div>
                <section className="section__card">
                    <div className="card__box">
                        <button className="card__reset"><i className="far fa-trash-alt"></i>Reset</button>
                        <div className="card__box--header">
                            <div className="card__box--text">
                                <h3 className="card__name resultName">{this.props.newName.name === '' ? 'Nombre y apellidos' : this.props.newName.name}</h3>
                                <p className="card__job-title resultJob">{this.props.newName.job === '' ? 'Front end developer' : this.props.newName.name}</p>
                            </div>
                        </div>
                        <div className="card__photo js__profile-image"></div>
                        <ul className="card__list">
                            <li className={`list__item list__item--email  ${this.props.newName.email === '' ? 'hidden' : ''}`}>
                                <a href={`mailto:${this.props.newName.email}`} className="card__list--link far fa-envelope email__icon" target="_blank"  rel="noopener noreferrer" >email</a>
                            </li>
                            <li className={`list__item list__item--phone ${this.props.newName.phone === '' ? 'hidden' : ''}`}>
                                <a href={`tel:${this.props.newName.phone}`} className="card__list--link fas fa-mobile-alt phone__icon" target="_blank"  rel="noopener noreferrer" >mobile</a>
                            </li>
                            <li className={`list__item list__item--linkelind ${this.props.newName.linkedin === '' ? 'hidden' : ''}`}>
                                <a href={`https://www.linkedin.com/in/${this.props.newName.linkedin}`} className="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank"  rel="noopener noreferrer" >linkedin</a>
                            </li>
                            <li className={`list__item list__item--github ${this.props.newName.github === '' ? 'hidden' : ''}`}>
                                <a href={`https://github.com/${this.props.newName.github}`} className="card__list--link fab fa-github-alt github__icon" target="_blank"  rel="noopener noreferrer" >github</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Preview;