
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
    return state;
}

export default rootReducer;