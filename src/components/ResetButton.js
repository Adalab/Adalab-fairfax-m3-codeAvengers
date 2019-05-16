import React from 'react';

class ResetButton extends React.Component {
    render() {
        return (
            <button className="card__reset" onClick={this.props.actionReset}><i className="far fa-trash-alt"></i>Reset</button>
        )
    }
}

export default ResetButton;