import React from 'react';
import DesignForm from './DesignForm';
import FillForm from './FillForm';
import ShareForm from './ShareForm';

class Collapsible extends React.Component {
    render() {
        return (
            <main className="card__main">
                <div>
                    <form action="" method="post" className="section__settings">
                        <div className="wrapper-card">
                            <fieldset className="fieldset__settings">
                                <div id="design" href="#" className="design__first-box collapsible__title design__title"> <i className="design__img far fa-object-ungroup"></i>

                                    <h2 className="design__title--name">diseña</h2>
                                    <i id="design-arrow" className="fas fa-chevron-up arrow"></i>

                                </div>
                                <DesignForm />
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className="settings__fill section__fieldset hidden__collapsible">
                                    <div id="fill" href="#" className="fill__first-box collapsible__title">
                                        <div className="fill__title"> <i className="fill__img far fa-keyboard"></i>

                                            <h2 className="fill__title--name">Rellena</h2>

                                        </div> <i id="fill-arrow" className="fas fa-chevron-up arrow"></i>

                                    </div>
                                    <FillForm />
                                </div>
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className="share__design section__fieldset hidden__collapsible">
                                    <div id="share" href="#" className="share__title collapsible__title"> <i className="share__title--img fas fa-share-alt"></i>

                                        <h2 className="share__title--name">Comparte</h2>
                                        <i id="share-arrow" className="fas fa-chevron-up arrow"></i>

                                    </div>
                                    <ShareForm />
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
        )
    }
}

export default Collapsible;



