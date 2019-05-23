import React from 'react';

class ShareForm extends React.Component {
    render() {
        const{sendRequest, dataURL} = this.props;
        return (
            <div id="share-container" className="share__collapsible--container collapsible__container">
                <div className="share__options">
                    <button type="submit" className="share__button " onClick={sendRequest}><i className="share__button--img far fa-address-card"></i>Crear tarjeta</button>
                </div>
                <div className="share__created hidden">
                    <h3 className="share__created--text" >La tarjeta ha sido creada</h3>
                    <a href={dataURL} className="share__created--link">{dataURL}</a>
                    <div className="share__created--twitter-container">
                        <div className="twitter"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareForm;



