import React from 'react';
import ControlGroup from './controlGroup';
import '../styles/teamGroup.scss';


const TeamGroup = (props) =>{

    return(
        <div className="teamGroup">
            <ControlGroup/>
            <ControlGroup/>
        </div>
    )


}

export default TeamGroup;

