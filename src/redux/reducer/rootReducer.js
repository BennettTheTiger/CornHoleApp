import {
    TEAM1ON,
    TEAM2ON, 
    TEAM1IN, 
    TEAM2IN, 
    ADDSCORE,
    NEWROUND,
    RESETSCORE
} from '../types'

import { TYPES } from '../../routes/Settings/actions/types';
import update from 'immutability-helper';
import { initState } from '../../utils/initState'
const R = require('ramda');

const rootReducer = (state = R.clone(initState), action)=>{
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
            return update(state, {
                scoreData: { $merge : action.addScore},
            });
        case NEWROUND:
            return update(state, {
                scoreData: {round: {$set: action.data.round}},
                team1: {$merge: action.data.reset},
                team2: {$merge: action.data.reset},
            });
        case RESETSCORE:
            return update(state, {
                scoreData : {$set: action.data}
            });
            //SETTING ACTIONS
        case TYPES.EDITPTSCANCEL:
            return state;
        
        case '@@INIT':
            console.log('State initalized');
            break
        default:
            console.error('Unknown Action');
    }

    return state;
}

export default rootReducer;