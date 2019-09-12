import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss';

const ChangePopup = (props) => {
    const { save , cancel } = props.buttonActions
    return (
        <div className="popup-container">
            <p>You have changed the settings. To apply your changes click save. <br/> 
            <span className="warning">NOTE: Saving your changes resets any game progress.</span></p>
            <div className="btns">
                <button
                    title="Cancel and discard your changes." 
                    className="cancel-btn"
                    onClick={cancel}
                >Cancel
                </button>
                <button
                    title="Save your changes." 
                    className="save-btn"
                    onClick={save}
                >Save Changes
                </button>
            </div>
        </div>
    )
}

ChangePopup.defaultProps = {
    buttonActions:{
        save: () => console.log('Save Action Clicked'),
        cancel: () => console.log('Cancel Action Clicked')
    }
}

ChangePopup.prototype = {
    buttonActions: PropTypes.objectOf(PropTypes.shape({
        save: PropTypes.func,
        cancel: PropTypes.func
    }))
}

export default ChangePopup;