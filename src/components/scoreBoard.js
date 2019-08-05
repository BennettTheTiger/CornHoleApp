import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/scoreBoard.scss';

const ScoreBoard = (props) =>{
    const {
        team1name,
        team2name,
        scoreData
    } = props
    return(
        <div className="scoreBoard">
            <div className="teamContainer">
                <h3>{scoreData.team1}</h3>
                <p>{team1name}</p>
            </div>
            <div className="teamContainer">
                <h3>{scoreData.team2}</h3>
                <p>{team2name}</p>
            </div>
        </div>
    )
}

ScoreBoard.prototype = {
   team1name: PropTypes.string,
   scoreData: PropTypes.objectOf(PropTypes.shape({
       team1: PropTypes.number,
       team2: PropTypes.number
   })),
   team2name: PropTypes.string,
}

//gets data of redux store state
const mapStateToProps = (state) => {
    return{
        scoreData: state.scoreData,
        team2name: state.team2.name,
        team1name: state.team1.name,
    }
}

export default connect(mapStateToProps)(ScoreBoard)