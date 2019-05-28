import React from 'react';
import PropTypes from 'prop-types';

class ProfileImage extends React.Component {
  render() {
    const {profile} = this.props;
    return (
      <div className="profile">
        <div className="profile__avatar card__photo js__profile-image" style={{backgroundImage: `url(${profile})`}}></div>
      </div>
    );
  }
}

ProfileImage.propTypes = {
  profile: PropTypes.string.isRequired
};

export default ProfileImage;