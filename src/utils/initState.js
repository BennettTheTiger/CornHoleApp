

const basicConfig = {
    bags: 4,
    ptsCancel:true,
    winByTwo: true,
    targetScore: 21,
    overReset: 16,
    inVal: 3,
    onVal: 1
}

export const initState = {
    config: basicConfig,
    scoreData: {
        round: 0,
        team1:0,
        team2:0,
        history:[
            {
                team1: 0, 
                team2: 0
            }]
    },
    team1: {
        name: 'Team 1',
        bags_in:0,
        bags_on:0,
    },
    team2 : {
        name: 'Team 2',
        bags_in:0,
        bags_on:0,
    },
    ui:{
        confirmPopup: false,
        config: { 
            basicConfig, 
        },
        menuOpen: false
    }
};