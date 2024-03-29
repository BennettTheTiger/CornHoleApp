import React from 'react'
import PropTypes from 'prop-types';
import './pointButton.scss';

const PointButton = (props) =>{    
    return(
        <div>
            <button className="ptBtn" onClick={props.changePoints} >
                {props.name}
            </button>
        </div>
    )
}

PointButton.prototype = {
    changePoints: PropTypes.func,
    addBtn: PropTypes.bool
}

PointButton.defaultProps = {
    addBtn: false,
    changePoints: () =>{console.log('default change points clicked')}
}

export default PointButton