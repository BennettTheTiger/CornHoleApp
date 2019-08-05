export const initState = {
    config: {
        bags: 4,
        teamsOf2: false,
        ptsCancel:true,
        winByTwo: true,
        targetScore: 21,
        inVal: 3,
        onVal: 1
    },
    scoreData: {
        round: 0,
        team1:0,
        team2:0,
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
    }
}