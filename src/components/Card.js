import React from 'react';
import Header from './Header';
import Collapsible from './Collapsible';
import Footer from './Footer';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  actionToChange: PropTypes.func,
  newCard: PropTypes.object,
  changeColor: PropTypes.func,
  actionToCollapsibles: PropTypes.func,
  collapsibleValue: PropTypes.string,
  actionReset: PropTypes.func,
  profile: PropTypes.string,
  isAvatarDefault: PropTypes.bool,
  updateAvatar: PropTypes.func,
  sendRequest: PropTypes.func,
  dataURL: PropTypes.object
}

export default Card;
