import React from 'react'
import PropTypes from 'prop-types';
import '../styles/barButton.scss';

const BarButton = (props) =>{
    const {name, handleClick} = props
    return(
        <div className="btnContainer">
            <button className="btn" onClick={handleClick}>{name}</button>
        </div>
    )
}

BarButton.defaultProps = {
    name:'End Round',
    handleClick: () =>{console.log('clicked button')}
}

BarButton.prototype = {
   title: PropTypes.string,
   handleClick: PropTypes.func 
}

export default BarButton