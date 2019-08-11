import React from 'react'
import PointLabel from './PointLabel/pointLabel';
import PointButton from './PointButton/pointButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    TEAM1ON,
    TEAM1IN,
    TEAM2ON,
    TEAM2IN
} from '../../../redux/types';
import './controlGroup.scss';


const validChange = (num) =>{
    return num <= 4 && num >=  0 ? true: false;
}

const ControlGroup = (props) => {
    const {
        ptsInBoard,
        ptsOnBoard,
        updateIn,
        updateOn,
        onBoard, 
        limit
    } = props;
    const addInBoard = () =>{
        const newVal = ptsInBoard + 1
        if (validChange(newVal)){
            updateIn(newVal);
            if (newVal + ptsOnBoard >= limit){
                updateOn(limit - newVal)
            }
        }
    }
    const removeInBoard = () =>{
        if (validChange(ptsInBoard - 1)){
            updateIn(ptsInBoard - 1);
        }
    }
    const addOnBoard = () =>{
        const newVal = ptsOnBoard + 1
        if (validChange(newVal)){
            updateOn(newVal);
            if (newVal + ptsInBoard >= limit){
                updateIn(limit - newVal)
            }
        }
    }
    const removeOnBoard = () =>{
        if (validChange(ptsOnBoard - 1)){
            updateOn(ptsOnBoard - 1);
        }
    }
    return(
        <div>
            <div className="ctrlGroup">
                <PointButton 
                    name="-" 
                    changePoints={onBoard ? removeOnBoard : removeInBoard }
                />
                <PointLabel  pts={onBoard ? props.ptsOnBoard : props.ptsInBoard}/>
                <PointButton 
                    name="+"
                    changePoints={onBoard ? addOnBoard : addInBoard }
                />
                
            </div>
            <p className="label">{onBoard ? 'On ' : 'In '} Board</p>
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
            limit: state.config.bags,
            ptsInBoard: state.team1.bags_in,
            ptsOnBoard: state.team1.bags_on,
            ...passed
        }
    }
    return{
        limit: state.config.bags,
        ptsInBoard: state.team2.bags_in,
        ptsOnBoard: state.team2.bags_on,
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