import React from 'react';
import Header from './Header';

class Card extends React.Component {
    render() {
        return (
            <div className="card__body" id="card__body">
                <Header />
                <main className="card__main">
                    <div>
                        <form action="" method="post" className="section__settings">
                            <div className="wrapper-card">
                                <fieldset className="fieldset__settings">
                                    <div id="design" href="#" className="design__first-box collapsible__title design__title"> <i className="design__img far fa-object-ungroup"></i>

                                        <h2 className="design__title--name">diseña</h2>
                                        <i id="design-arrow" className="fas fa-chevron-up arrow"></i>

                                    </div>
                                    <div id="design-container" className="design__container--palette collapsible__container">
                                        <div>
                                            <h3 className="design__title--colors">colores</h3>

                                        </div>
                                        <div> <a href className="design__palette-colors">
                                            <label className="design__palette palette1" for="settings__palette1">
                                                <input className="desidn__radio" value="1" type="radio" id="settings__palette1" name="color" checked />
                                                <ul className="design__list">
                                                    <li className="list__color" style={{ backgroundColor: "#114e4e" }}></li>
                                                    <li className="list__color" style={{ backgroundColor: "#438792" }}></li>
                                                    <li className="list__color" style={{ backgroundColor: "#a2deaf" }}></li>
                                                </ul>
                                            </label>
                                        </a>
                                            <a href className="design__palette-colors">
                                                <label className="design__palette palette2" for="settings__palette2">
                                                    <input className="desidn__radio" type="radio" id="settings__palette2" value="2" name="color" />
                                                    <ul className="design__list">
                                                        <li className="list__color" style={{ backgroundColor: "#420101" }}></li>
                                                        <li className="list__color" style={{ backgroundColor: "#bd1010" }}></li>
                                                        <li className="list__color" style={{ backgroundColor: "#e95626" }}></li>
                                                    </ul>
                                                </label>
                                            </a>
                                            <a href className="design__palette-colors">
                                                <label className="design__palette palette3" for="settings__palette3">
                                                    <input className="desidn__radio" value="3" type="radio" id="settings__palette3" name="color" />
                                                    <ul className="design__list">
                                                        <li className="list__color" style={{ backgroundColor: "#3e5b65" }}></li>
                                                        <li className="list__color" style={{ backgroundColor: "#dfe5eb" }}></li>
                                                        <li className="list__color" style={{ backgroundColor: "#a0c0cf" }}></li>
                                                    </ul>
                                                </label>
                                            </a>

                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="fieldset__settings">
                                    <div className="settings__fill section__fieldset hidden__collapsible">
                                        <div id="fill" href="#" className="fill__first-box collapsible__title">
                                            <div className="fill__title"> <i className="fill__img far fa-keyboard"></i>

                                                <h2 className="fill__title--name">Rellena</h2>

                                            </div> <i id="fill-arrow" className="fas fa-chevron-up arrow"></i>

                                        </div>
                                        <div id="fill-container" className="fill__form collapsible__container">
                                            <fieldset className="fill__fieldset">
                                                <label for="fullName">Nombre completo</label>
                                                <input className="input-name" placeholder="Ej: Sally Jill"
                                                    id="fullName" type="text" name="name" required />
                                                <label for="jobTitle">Puesto</label>
                                                <input className="input-job" placeholder="Ej: Front-end unicorn"
                                                    id="jobTitle" type="text" name="job" required />
                                            </fieldset>
                                            <fieldset className="fill__fieldset select-image">
                                                <label for="selectImage">Imagen de perfil</label>
                                                <div className="fill__select-image--container">
                                                    <button className="fill__select--button js__profile-trigger" type="button">Añadir imagen</button>
                                                    <input id="selectImage" type="file" accept=".png, .jpg, .jpeg"
                                                        name="selectImage" className="js__profile-upload-btn" />
                                                    <div className="preview__image js__profile-preview"></div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="fill__fieldset">
                                                <label for="email">Email</label>
                                                <input placeholder="Ej: sally-hill@gmail.com" id="email"
                                                    type="email" name="email" />
                                                <label for="phone">Teléfono</label>
                                                <input placeholder="Ej: 555-55-55-55" id="phone" type="tel"
                                                    name="phone" />
                                                <label for="linkedin">Linkedin</label>
                                                <input placeholder="Ej: sally.hill" id="linkedin" type="text"
                                                    name="linkedin" />
                                                <label for="github">Github</label>
                                                <input placeholder="Ej: sally-hill" id="github" type="text"
                                                    name="github" />
                                            </fieldset>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="fieldset__settings">
                                    <div className="share__design section__fieldset hidden__collapsible">
                                        <div id="share" href="#" className="share__title collapsible__title"> <i className="share__title--img fas fa-share-alt"></i>

                                            <h2 className="share__title--name">Comparte</h2>
                                            <i id="share-arrow" className="fas fa-chevron-up arrow"></i>

                                        </div>
                                        <div id="share-container" className="share__collapsible--container collapsible__container">
                                            <div className="share__options">
                                                <button type="submit" className="share__button "><i className="share__button--img far fa-address-card"></i>Crear tarjeta</button>
                                            </div>
                                            <div className="share__created">
                                                <h3 className="share__created--text">La tarjeta ha sido creada</h3>
                                                <a href="" className="share__created--link"></a>

                                                <div className="share__created--twitter-container">
                                                    <div className="twitter"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                    <div>
                        <section className="section__card">
                            <div className="card__box">
                                <button className="card__reset"><i className="far fa-trash-alt"></i>Reset</button>
                                <div className="card__box--header">
                                    <div className="card__box--text">
                                        <h3 className="card__name resultName">Nombre Apellido</h3>

                                        <p className="card__job-title resultJob">Front-end developer</p>
                                    </div>
                                </div>
                                <div className="card__photo js__profile-image"></div>
                                <ul className="card__list">
                                    <li className="list__item list__item--email"></li>
                                    <li className="list__item list__item--phone"></li>
                                    <li className="list__item list__item--linkelind"></li>
                                    <li className="list__item list__item--github"></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </main>
                <footer className="footer-container">
                    <div className="footer-container__wraper">
                        <p className="footer__text">Awesome profile cards &copy2018</p> <a href="https://github.com/Adalab/fairfax-m2-catchFire"
                            target="_blank"><img src="assets/images/catch-fire.png" alt="logo grupo Catch Fire" className="footer__fire" /></a>

                        <a
                            href="https://adalab.es/" className="footer__link" target="_blank">
                            <img src="assets/images/logo-adalab.png" alt="logo adalab" className="footer__img" />
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Card;