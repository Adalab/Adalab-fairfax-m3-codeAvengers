import React from 'react';
import DesignForm from './DesignForm';
import FillForm from './FillForm';
import ShareForm from './ShareForm';
import Preview from './Preview';

class Collapsible extends React.Component {
    render() {
        const {actionToChange,newCard,changeColor,actionToCollapsibles,collapsibleValue, actionReset, profile, isAvatarDefault,updateAvatar,sendRequest,dataURL} = this.props;
        return (
            <main className="card__main">
                <div>
                    <form action="" method="post" className="section__settings">
                        <div className="wrapper-card">
                            <fieldset className="fieldset__settings">
                            <div className={`settings__design section__fieldset ${collapsibleValue === 'design' ? '' : 'hidden__collapsible'}`}>
                                <div id="design" href="#" className="design__first-box collapsible__title design__title" onClick={actionToCollapsibles}> <i className="design__img far fa-object-ungroup"></i>
                                    <h2 className="design__title--name">diseña</h2>
                                    <i id="design-arrow" className="fas fa-chevron-up arrow"></i>
                                </div>
                                <DesignForm changeColor={changeColor} palette={newCard.palette}/>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className={`settings__fill section__fieldset ${collapsibleValue === 'fill' ? '' : 'hidden__collapsible'}`}>
                                    <div id="fill" href="#" className="fill__first-box collapsible__title" onClick={actionToCollapsibles}>
                                        <div className="fill__title"> <i className="fill__img far fa-keyboard"></i>
                                            <h2 className="fill__title--name">Rellena</h2>
                                        </div> <i id="fill-arrow" className="fas fa-chevron-up arrow"></i>
                                    </div>
                                    <FillForm 
                                    actionToChange={actionToChange} 
                                    newCard={newCard} 
                                    profile={profile} 
                                    isAvatarDefault={isAvatarDefault}
                                    updateAvatar={updateAvatar}/>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset__settings">
                                <div className={`share__design section__fieldset  ${collapsibleValue === 'share' ? '' : 'hidden__collapsible'}`}>
                                    <div id="share" href="#" className="share__title collapsible__title" onClick={actionToCollapsibles}> <i className="share__title--img fas fa-share-alt"></i>
                                        <h2 className="share__title--name">Comparte</h2>
                                        <i id="share-arrow" className="fas fa-chevron-up arrow"></i>
                                    </div>
                                    <ShareForm actionToChange={actionToChange} 
                                    sendRequest = {sendRequest} dataURL = {dataURL}/>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
                <Preview profile={profile} actionReset={actionReset} newCard={newCard} />
            </main>
        )
    }
}

export default Collapsible;



