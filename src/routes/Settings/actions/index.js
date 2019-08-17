import {TYPES} from './types';

// action creators
export const editPtsCancel = () => {
    return (dispatch) => {
        dispatch({type: TYPES.EDITPTSCANCEL, cancel: true})
    }
}

export const editTeam1Name = () =>{
    return (dispatch) => {
       dispatch({type: TYPES.EDITTEAM1NAME, name: 'test'});
    }
}

export const editTeam2Name = () => {
    return (dispatch) => {
        dispatch({type: TYPES.EDITTEAM2NAME, name: 'test'});
    }
}

export const editBagCount = () => {
    return (dispatch) => {
        dispatch({type: TYPES.EDITBAGCOUNT, bags: 8});
    }
}

export const editTargetPts = () => {
    return (dispatch, pts) => {
        dispatch({type: TYPES.EDITTARGETPTS, points: pts});
    }
}

export const editInPts = () => {
    return (dispatch, pts) => {
        dispatch({type: TYPES.EDITINPTS, points: pts});
    }
}

export const editOnPts = (pts) => {
    return (dispatch, getState ) => {
        dispatch({type: TYPES.EDITONPTS, points:pts});
    }
}
