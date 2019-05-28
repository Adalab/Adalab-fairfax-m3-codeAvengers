import React from 'react';
import PropTypes from 'prop-types';

class ResetButton extends React.Component {
    render() {
        return (
            <button className="card__reset" onClick={this.props.actionReset}><i className="far fa-trash-alt"></i>Reset</button>
        )
    }
}

ResetButton.propTypes = {
    actionReset: PropTypes.func,
}
export default ResetButton;