import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { editTeam1Name, editTeam2Name} from '../../actions'
import './style.scss';

const NameEditer = (props) => {

    const {
        team1,
        changeTeam1,
        changeTeam2,
        team1Name,
        team2Name
    } = props
    const handleChange = (val) => {
        return team1 ? changeTeam1(val) : changeTeam2(val)
    }

    const getName = () => {
        return team1 ? team1Name : team2Name
    }
    return (
        <div className="name-container">
            <label>{`Team ${team1 ? '1' : '2'} name:`}</label>
            <input
                className="textbox" 
                type="text"
                defaultValue={getName()}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

NameEditer.defaultProps = {
    placeholder: 'Team Name Here',
    label: 'team name editor',
    team1: false
}

NameEditer.prototype = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func,
    team1: PropTypes.bool
}

const mapStateToProps = (state, passed) => {
    //console.log(state.config, passed)
    return {
        ...passed,
        team1Name: state.team1.name,
        team2Name: state.team2.name
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        changeTeam1: (name) => dispatch(editTeam1Name(name)),
        changeTeam2: (name) => dispatch(editTeam2Name(name)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NameEditer)