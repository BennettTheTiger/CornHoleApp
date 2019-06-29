import {TEAM1ON,TEAM2ON, TEAM1IN, TEAM2IN} from '../actions'
const initState = {
    bags: 4,
    round: 0,
    teamsOf2: false,
    ptsCancel:true,
    winByTwo: true,
    targetScore: 21,
    team1name: 'Team 1' ,
    team1_in:0,
    team1_on:0,
    team1score:0,
    team2name: 'Team 2' ,
    team2_in:0,
    team2_on:0,
    team2score:0,
}

const rootReducer = (state = initState, action)=>{
    console.log(action);
    switch(action.type){
        case TEAM1ON:
            return {
                ...state,
                team1_on: action.num
            }
        case TEAM2ON:
            return {
                ...state,
                team2_on: action.num
            }
        case TEAM1IN:
            return {
                ...state,
                team1_in: action.num
            }
        case TEAM2IN:
            return {
                ...state,
                team2_in: action.num
            }
        default:
            console.log('Unknown Action');
    }

    return state;
}

export default rootReducer;