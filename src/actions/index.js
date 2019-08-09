//Action Types
export const TEAM1SCORE = 'TEAM1SCORE';
export const TEAM1ON = 'TEAM1ON';
export const TEAM1IN = 'TEAM1IN';

export const TEAM2SCORE = 'TEAM2SCORE';
export const TEAM2ON = 'TEAM2ON';
export const TEAM2IN = 'TEAM2IN';

export const NEWROUND = 'NEWROUND'
export const RESETGAME ='RESETGAME'
export const ADDSCORE = 'ADDSCORE'

//Action Creators

export function addTeam1Score(newScore) {
    return { type: TEAM1SCORE, newScore }
}
  
export function team1totalOn(num) {
    return { type: TEAM1ON, num }
}
  
export function team1totalIn(num) {
    return { type: TEAM1IN, num }
}
// team 2 
export function addTeam2Score(newScore) {
    return { type: TEAM2SCORE, newScore }
}
  
export function team2totalOn(num) {
    return { type: TEAM2ON, num }
}
  
export function team2totalIn(num) {
    return { type: TEAM2IN, num }
}

// scoring logic
export function addScoreAction() {
    return (dispatch, getState) => {
        const {
            config,
            scoreData,
            team1,
            team2
        } = getState();
        // default addScore
        const addScore = {
            team1: scoreData.team1,
            team2 : scoreData.team2,
        }

        if(config.ptsCancel){
            //calc team1 round total
            const t1on = team1.bags_on - team2.bags_on > 0 ? (team1.bags_on - team2.bags_on) * config.onVal : 0 ;
            const t1in = team1.bags_in - team2.bags_in > 0 ? (team1.bags_in - team2.bags_in) * config.inVal : 0 ;
            //calc team2 round total
            const t2on = team2.bags_on - team1.bags_on > 0 ? (team2.bags_on - team1.bags_on) * config.onVal : 0 ;
            const t2in = team2.bags_in - team1.bags_in > 0 ? (team2.bags_in - team1.bags_in) * config.inVal : 0 ;
            //update addScore object
            addScore.team1 += t1on + t1in;
            addScore.team2 += t2on + t2in;
        }
        else{

        }
        dispatch({type: ADDSCORE, addScore})
        //reset action
        const data = {
            reset: {
                bags_in: 0,
                bags_on: 0
            },
            round: getState().scoreData.round + 1 
        }
        dispatch({type: NEWROUND, data});
    }
}
        
