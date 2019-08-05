import {
    TEAM1ON,
    TEAM2ON, 
    TEAM1IN, 
    TEAM2IN, 
    RESETGAME,
    ADDSCORE
} from '../actions'
import update from 'immutability-helper';
import { initState } from '../utils/initState'

const rootReducer = (state = initState, action)=>{
    console.log(action);
    switch(action.type){
        case TEAM1ON:
            return update(state, {
                team1: { bags_on : { $set : action.num}}
            });
        case TEAM2ON:
            return update(state, {
                team2: { bags_on : { $set : action.num}}
            });
        case TEAM1IN:
            return update(state, {
                team1: { bags_in : { $set : action.num}}
            });
        case TEAM2IN:
            return update(state, {
                team2: { bags_in : { $set : action.num}}
            });
        case ADDSCORE:
            return {
                ...state,
                team1score: state.team1score += state.team1_in * state.inVal + state.team1_on * state.onVal,
                team2score: state.team2score += state.team2_in * state.inVal + state.team2_on * state.onVal,
                team1_in: 0,
                team1_on: 0,
                team2_in: 0,
                team2_on: 0,
                round: state.round++
            }
        case RESETGAME:
            return{
                ...state,
                team1score: 0,
                team2score: 0,
                round: 0
            }
        case '@@INIT':
            console.log('State initalized');
            break
        default:
            console.error('Unknown Action');
    }

    return state;
}

export default rootReducer;