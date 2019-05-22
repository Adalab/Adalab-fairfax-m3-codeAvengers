import React from 'react';
import Header from './Header';
import Collapsible from './Collapsible';
import Footer from './Footer';

class Card extends React.Component {
  render () {
    return (
      <div className="card__body" id="card__body">
        <Header />
        <Collapsible
          actionToChange={this.props.actionToChange}
          newCard={this.props.newCard}
          changeColor={this.props.changeColor}
          actionToCollapsibles={this.props.actionToCollapsibles}
          collapsibleValue={this.props.collapsibleValue}
          actionReset={this.props.actionReset}
          profile={this.props.profile}
          isAvatarDefault={this.props.isAvatarDefault}
          updateAvatar={this.props.updateAvatar}
        />
        <Footer />
      </div>
    );
  }
}

export default Card;
