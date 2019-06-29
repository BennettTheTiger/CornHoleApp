import React from 'react'
import PointLabel from './pointLabel';
import PointButton from './pointButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    TEAM1ON,
    TEAM1IN,
    TEAM2ON,
    TEAM2IN
} from '../actions';
import '../styles/controlGroup.scss';


const ControlGroup = (props) => {
    console.log(props);
    const team = 'test';
    const addInBoard = () =>{
        props.updateIn(props.ptsInBoard + 1);
    }
    const removeInBoard = () =>{
        props.updateIn(props.ptsInBoard - 1);
    }
    const addOnBoard = () =>{
        console.log('addOnBoard',team)
        props.updateOn(props.ptsOnBoard + 1);
    }
    const removeOnBoard = () =>{
        console.log('removeOnBoard',team)
        props.updateOn(props.ptsOnBoard - 1);
    }
    return(
        <div>
            <div className="ctrlGroup">
                <PointButton 
                    name="-" 
                    changePoints={props.onBoard ? removeOnBoard : removeInBoard }
                />
                <PointLabel  pts={props.onBoard ? props.ptsOnBoard : props.ptsInBoard}/>
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

const mapStateToProps = (state, passed) => {
    if (passed.isTeam1){
        return {
            ptsInBoard: state.team1_in,
            ptsOnBoard: state.team1_on,
            ...passed
        }
    }
    return{
        ptsInBoard: state.team2_in,
        ptsOnBoard: state.team2_on,
        ...passed
    }
}

const mapDispatchToProps = (dispatch, passed) => {
    if (passed.isTeam1){
        return{
           updateIn: (num) => {dispatch({type:TEAM1IN,num:num})},
           updateOn: (num) => {dispatch({type:TEAM1ON,num:num})}
        }
    }
    return {
        updateIn: (num) => {dispatch({type:TEAM2IN,num:num})},
        updateOn: (num) => {dispatch({type:TEAM2ON,num:num})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlGroup)