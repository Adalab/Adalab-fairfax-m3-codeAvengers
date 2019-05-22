import React from 'react';
import PropTypes from 'prop-types';

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();
    
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click(); 
  }

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }

  render() {
    const {isAvatarDefault, profile} = this.props;
    return (
      <div className="get-avatar fill__select-image--container">
        <button className="get-avatar__trigger fill__select--button js__profile-trigger" type="button" onClick={this.handleFilePicker}>Añadir imagen</button>
        <input id="selectImage" type="file" accept=".png, .jpg, .jpeg" ref={this.myFileField} className="get-avatar__upload-field js__profile-upload-btn" onChange={this.uploadImage} />
        <div className="get-avatar__preview preview__image js__profile-preview" style={this.getPreview(isAvatarDefault, profile)}></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

export default GetAvatar;