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
//team 2 
export function addTeam2Score(newScore) {
    return { type: TEAM2SCORE, newScore }
}
  
export function team2totalOn(num) {
    return { type: TEAM2ON, num }
}
  
export function team2totalIn(num) {
    return { type: TEAM2IN, num }
}