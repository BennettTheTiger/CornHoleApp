import React from 'react'
import PropTypes from 'prop-types';
import '../styles/scoreBoard.scss';

const ScoreBoard = (props) =>{
    const {
        team1name,
        team1score,
        team2name,
        team2score
    } = props
    return(
        <div className="scoreBoard">
            <div className="teamContainer">
                <h3>{team1score}</h3>
                <p>{team1name}</p>
            </div>
            <div className="teamContainer">
                <h3>{team2score}</h3>
                <p>{team2name}</p>
            </div>
        </div>
    )
}

ScoreBoard.defaultProps = {
    team1name: 'Team 1',
    team1score: 0,
    team2name: 'Team 2',
    team2score: 0, 
}

ScoreBoard.prototype = {
   team1name: PropTypes.string,
   team1score: PropTypes.number,
   team2name: PropTypes.string,
   team2score: PropTypes.number,  
}

export default ScoreBoard