import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetScore, revertScore } from './redux/actions'
import MenuButton from '../MenuButton';
import {ReactComponent as Trash} from '../../icons/trash.svg';

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
                <button 
                    onClick={handleReset} 
                    title={resetTitle} 
                    disabled={noHistory}>
                        <Trash/>
                </button>
            </div>
            <div className="option">
                <button onClick={handleRevert} title={revertTitle} disabled={noHistory}>{revertTitle}</button>
            </div>
            <MenuButton/>
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