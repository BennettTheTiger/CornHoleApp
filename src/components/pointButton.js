import React from 'react'
import '../styles/pointButton.scss';

const PointButton = (props) =>{

    const {name} = props;
    
    return(
        <div>
            <button className="ptBtn">{name}</button>
        </div>
    )
}

export default PointButton