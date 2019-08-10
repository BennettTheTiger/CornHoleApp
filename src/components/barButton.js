import React from 'react'
import { connect } from 'react-redux'
import { addScoreAction } from '../redux/actions'
import PropTypes from 'prop-types';
import '../styles/barButton.scss';

const BarButton = (props) =>{
    console.dir(props);
    const {
        name, 
        submitScore
    } = props

    const handleClick = () => {
        submitScore();
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitScore: () => dispatch(addScoreAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BarButton)