import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

ScoreBoard.prototype = {
   team1name: PropTypes.string,
   team1score: PropTypes.number,
   team2name: PropTypes.string,
   team2score: PropTypes.number,  
}

//gets data of redux store state
const mapStateToProps = (state) => {
    return{
        team1name: state.team1name,
        team1score : state.team1score,
        team2name: state.team2name,
        team2score: state.team2score,
    }
}

export default connect(mapStateToProps)(ScoreBoard)