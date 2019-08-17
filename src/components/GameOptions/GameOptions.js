import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetScore, revertScore } from './redux/actions'
const GameOptions = (props) => {
    const {
        handleReset,
        handleRevert,
        resetTitle,
        revertTitle,
        noHistory
    } = props

    return (
        <div className="container">
            <div className="option">
                <button onClick={handleReset} title={resetTitle} disabled={noHistory}>{resetTitle}</button>
            </div>
            <div className="option">
                <button onClick={handleRevert} title={revertTitle} disabled={noHistory}>{revertTitle}</button>
            </div>
        </div>
    )
}

GameOptions.prototype = {
    handleReset: PropTypes.func,
    handleRevert: PropTypes.func
}

GameOptions.defaultProps = {
    handleReset: () => console.log('Handle Reset called'),
    handleRevert: () => console.log('Handle Revert'),
    resetTitle: 'Reset Score',
    revertTitle: 'Undo Change'  
}

const mapStateToProps = (state, passed) => {
    return {
        ...passed,
        noHistory: state.scoreData.history.length <= 1 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(resetScore()),
        handleRevert: () => dispatch(revertScore())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameOptions)