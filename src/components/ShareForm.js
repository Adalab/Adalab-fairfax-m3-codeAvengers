import React from 'react';

class ShareForm extends React.Component {
    render() {
        const{sendRequest, dataURL} = this.props;
        return (
            <div id="share-container" className="share__collapsible--container collapsible__container">
                <div className="share__options">
                    <button type="submit" className="share__button " onClick={sendRequest}><i className="share__button--img far fa-address-card"></i>Crear tarjeta</button>
                </div>
                <div className="share__created">
                    <h3 className="share__created--text" >La tarjeta ha sido creada</h3>
                    <a href={dataURL} className="share__created--link">{dataURL}</a>
                    <div className="share__created--twitter-container">
                        <div className="twitter">
                            <a href={`http://twitter.com/intent/tweet?text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20profesional%20creada%20por%20;hashtags=codeAvengers,adalabers%20🦹🏻‍♀️%20${dataURL}`} target="_blank" rel="noopener" className="share__created--twitter"><i className="share__created--twitter-img fab fa-twitter"></i> Compartir en twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareForm;



