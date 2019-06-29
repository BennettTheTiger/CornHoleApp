import React from 'react';
import ControlGroup from './controlGroup';
import { connect } from 'react-redux';
import '../styles/teamGroup.scss';


const TeamGroup = (props) =>{
    console.log(props);
    return(
        <div className="teamGroup">
            <ControlGroup onBoard/>
            <ControlGroup/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        team1name: state.team1name,
        team2name: state.team2name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        printName: (id) =>{ dispatch({type:'SAY_HI', id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamGroup)

