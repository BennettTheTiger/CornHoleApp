import React from 'react'
import PointLabel from './pointLabel';
import PointButton from './pointButton';
import PropTypes from 'prop-types';
import '../styles/controlGroup.scss';


const ControlGroup = (props) => {

    const addInBoard = () =>{
        console.log('addInBoard')
    }
    const removeInBoard = () =>{
        console.log('removeInBoard')
    }
    const addOnBoard = () =>{
        console.log('addOnBoard')
    }
    const removeOnBoard = () =>{
        console.log('removeOnBoard')
    }
    return(
        <div>
            <div className="ctrlGroup">
                <PointButton 
                    name="-" 
                    changePoints={props.onBoard ? removeOnBoard : removeInBoard }
                />
                <PointLabel  pts={0}/>
                <PointButton 
                    name="+"
                    changePoints={props.onBoard ? addOnBoard : addInBoard }
                />
                
            </div>
            <p className="label">{props.onBoard ? 'On Board' : 'In Board'}</p>
        </div>
        
    )
}
   
ControlGroup.prototype = {
    label: PropTypes.string,
    onBoard: PropTypes.bool
}

ControlGroup.defaultProps = {
    label: 'In Board',
    onBoard: false   
}

export default ControlGroup