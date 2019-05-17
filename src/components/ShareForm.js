import React from 'react';

class ShareForm extends React.Component {
    render() {
        return (
            <div id="share-container" className={`share__collapsible--container ${this.props.collapsibleValue.share === true ? '' : 'hidden'}`}>
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
        )
    }
}

export default ShareForm;



