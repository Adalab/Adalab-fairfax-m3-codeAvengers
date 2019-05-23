import React from 'react';
import Header from './Header';
import Collapsible from './Collapsible';
import Footer from './Footer';


class Card extends React.Component {
  render () {
    const {actionToChange,newCard,changeColor,actionToCollapsibles,collapsibleValue, actionReset, profile, isAvatarDefault,updateAvatar,sendRequest,dataURL} = this.props;
    return (
      <div className="card__body" id="card__body">
        <Header />
        <Collapsible
          actionToChange={actionToChange}
          newCard={newCard}
          changeColor={changeColor}
          actionToCollapsibles={actionToCollapsibles}
          collapsibleValue={collapsibleValue}
          actionReset={actionReset}
          profile={profile}
          isAvatarDefault={isAvatarDefault}
          updateAvatar={updateAvatar} 
          sendRequest = {sendRequest}
          dataURL = {dataURL}
        />
        <Footer />
      </div>
    );
  }
}

export default Card;
