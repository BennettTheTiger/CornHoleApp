import {TYPES} from './types';

// action creators
export const editPtsCancel = (val) => {
    return dispatch => dispatch({type: TYPES.EDITPTSCANCEL, cancel: val})
}

export const editTeam1Name = (newName) =>{
    return dispatch => dispatch({type: TYPES.EDITTEAM1NAME, name: newName});
}

export const editTeam2Name = (newName) => {
    return dispatch => dispatch({type: TYPES.EDITTEAM2NAME, name: newName});
}

export const editBagCount = (newCount) => {
    return dispatch => dispatch({type: TYPES.EDITBAGCOUNT, bagCount: newCount});
}

export const editTargetPts = (newTarget) => {
    return dispatch => dispatch({type: TYPES.EDITTARGETPTS, points: newTarget});
}

export const editInPts = (pts) => {
    return dispatch => dispatch({type: TYPES.EDITINPTS, points: pts});
}

export const editOnPts = (pts) => {
    return dispatch => dispatch({type: TYPES.EDITONPTS, points:pts});
}
