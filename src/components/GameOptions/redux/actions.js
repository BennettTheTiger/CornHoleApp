import { initState } from '../../../utils/initState'
import { RESETSCORE } from '../../../redux/types'
const R = require('ramda');

//action creators
export function resetScore(){
    return (dispatch) => {
        dispatch({type: RESETSCORE, data: initState.scoreData});
    }
}

//reverts to last scoreData history object
export function revertScore(){
    return (dispatch, getState) => {
        const scoreData = getState().scoreData
        if(scoreData.history.length > 0){
            const scoreHistory = R.dropLast(1, scoreData.history);
            const data = {
                team1: R.last(scoreHistory).team1,
                team2: R.last(scoreHistory).team2,
                history: scoreHistory,
                round: R.subtract(scoreData.round,1)
            }
            dispatch({type:RESETSCORE, data});
        }
    }
}

