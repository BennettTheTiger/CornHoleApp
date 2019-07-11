import React from 'react'
import { connect } from 'react-redux'
import { ADDSCORE } from '../actions'
import PropTypes from 'prop-types';
import '../styles/barButton.scss';

const BarButton = (props) =>{
    console.dir(props);
    const {
        name, 
        t2in,
        t2on,
        t1in,
        t1on,
        inVal,
        onVal,
        submitScore
    } = props

    const handleClick = () => {
        console.log('clicked');
        const scoreData = {
            t2in,
            t2on,
            t1in,
            t1on,
            inVal,
            onVal,
        }
        submitScore(scoreData);
    }
   
    return(
        <div className="btnContainer">
            <button className="btn" onClick={handleClick}>{name}</button>
        </div>
    )
}

BarButton.defaultProps = {
    name:'End Round',
}

BarButton.prototype = {
   title: PropTypes.string,
   handleClick: PropTypes.func 
}



const mapStateToProps = (state, passed) => {
    return {
        ...passed,
        t2in: state.team2_in,
        t2on: state.team2_on,
        t1in: state.team1_in,
        t1on: state.team1_on,
        inVal: state.inVal,
        onVal: state.onVal
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitScore: (data) => dispatch( {type:ADDSCORE, data }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BarButton)