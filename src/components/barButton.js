import React from 'react'
import PropTypes from 'prop-types';

const BarButton = (props) =>{
    const {name, handleClick} = props
    return(
        <div>
            <button onClick={handleClick}>{name}</button>
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