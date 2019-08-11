import React from 'react'
import PropTypes from 'prop-types';

const NameEditer = (props) => {

    console.warn(props)
    return (
        <div className="name-container">
            <input type="text"
                defaultValue={props.placeholder}></input>
        </div>
    )
}

NameEditer.defaultProps = {
    placeholder: 'Team Name Here'
}

NameEditer.prototype = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func
}


export default NameEditer