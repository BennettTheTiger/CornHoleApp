import React from 'react';
import ControlGroup from './ControlGroup/controlGroup';
import { connect } from 'react-redux';
import './teamGroup.scss';


const TeamGroup = (props) =>{
    //console.log(props);
    return(
        <div className="teamGroup">
            <ControlGroup onBoard isTeam1={props.team1}/>
            <ControlGroup isTeam1={props.team1}/>
        </div>
    )
}

const mapStateToProps = (state, passed) => {
    return {
        ...passed
    }
}

export default connect(mapStateToProps)(TeamGroup)

