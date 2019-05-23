import React from 'react';
import DesignForm from './DesignForm';
import FillForm from './FillForm';
import ShareForm from './ShareForm';
import Preview from './Preview';

class Collapsible extends React.Component {
    render() {
        return (
            <main className="card__main">
                <div>
                    <form action="" method="post" className="section__settings">
                        <div className="wrapper-card">
                            <fieldset className="fieldset__settings">
                            <div className={`settings__design section__fieldset ${this.props.collapsibleValue === 'design' ? '' : 'hidden__collapsible'}`}>
                                <div id="design" href="#" className="design__first-box collapsible__title design__title" onClick={this.props.actionToCollapsibles}> <i className="design__img far fa-object-ungroup"></i>
                                    <h2 className="design__title--name">diseña</h2>
                                    <i id="design-arrow" className="fas fa-chevron-up arrow"></i>
                                </div>
                                <DesignForm changeColor={this.props.changeColor} palette={this.props.newCard.palette}/>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className={`settings__fill section__fieldset ${this.props.collapsibleValue === 'fill' ? '' : 'hidden__collapsible'}`}>
                                    <div id="fill" href="#" className="fill__first-box collapsible__title" onClick={this.props.actionToCollapsibles}>
                                        <div className="fill__title"> <i className="fill__img far fa-keyboard"></i>
                                            <h2 className="fill__title--name">Rellena</h2>
                                        </div> <i id="fill-arrow" className="fas fa-chevron-up arrow"></i>
                                    </div>
                                    <FillForm 
                                    actionToChange={this.props.actionToChange} 
                                    newCard={this.props.newCard} 
                                    profile={this.props.profile} 
                                    isAvatarDefault={this.props.isAvatarDefault}
                                    updateAvatar={this.props.updateAvatar}/>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className={`share__design section__fieldset  ${this.props.collapsibleValue === 'share' ? '' : 'hidden__collapsible'}`}>
                                    <div id="share" href="#" className="share__title collapsible__title" onClick={this.props.actionToCollapsibles}> <i className="share__title--img fas fa-share-alt"></i>
                                        <h2 className="share__title--name">Comparte</h2>
                                        <i id="share-arrow" className="fas fa-chevron-up arrow"></i>
                                    </div>
                                    <ShareForm actionToChange={this.props.actionToChange} />
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
                <Preview profile={this.props.profile} actionReset={this.props.actionReset} newCard={this.props.newCard} />
            </main>
        )
    }
}

export default Collapsible;



