import React from 'react'
import { connect } from 'react-redux'
import NameEditor from './components/namEditor/nameEditor'
import ChangePopup from './components/changesPopup'
import {
    editPtsCancel,
    editBagCount,
    editOnPts,
    editInPts,
    editTargetPts,
    saveEdits,
    discardEdits
} from './actions'
const R = require('ramda');


const SettingsContainer = (props) => {

    const { 
        ui, 
        config
    } = props;

    const settings = ui.config.basicConfig;

    const renderSavePopup = () => {
        if(!R.equals(config,ui.config.basicConfig)){
            //object with button actions passed as props to popup
            const buttonActions = {
                save: props.handleSaveEdits,
                cancel: props.handleCancelEdits
            }

            return (
                <ChangePopup buttonActions={buttonActions}/>
            ); 
        }
    }
    
    return(
        <div className="settings">
            <h2>Settings</h2>
            <NameEditor team1/>
            <NameEditor />
            <div className="game-varients">

            </div>
            <div className="game-config">
                <input 
                    id="bagNum"
                    type="number"
                    defaultValue={settings.bags}
                    min={1}
                    max={10} 
                    inputMode="numeric"
                    title="Number of bags per team" 
                    onChange={(e) => props.changeBagCount(e.target.value)}
                />
                <label htmlFor="bagNum">{`Bags per team: ${settings.bags * 2} total bags.`}</label>
                <input 
                    id="ptsCancel"
                    type="checkbox" 
                    title="Should points cancel?" 
                    checked={settings.ptsCancel}
                    onChange={(e) => props.handlePtsCancel(e.target.checked)}
                />
                <label htmlFor="ptsCancel">Same Points Cancel</label>
                <input 
                    id="targetScore"
                    type="number"
                    defaultValue={settings.targetScore}
                    min={1}
                    max={9999} 
                    title="Minimum points to win." 
                    onChange={(e) => props.changeTargetPts(e.target.value)}
                />
                <label htmlFor="targetScore">Target Point Value</label>
                <input 
                    id="inVal"
                    type="number"
                    defaultValue={settings.inVal}
                    inputMode="numeric"
                    min={1}
                    max={9999} 
                    title="Points for gettings bags in the hole." 
                    onChange={(e) => props.editPountsIn(e.target.value)}
                />
                <label htmlFor="inVal">Bags in the hole point value.</label>
                <input 
                    id="onVal"
                    type="number"
                    defaultValue={settings.onVal}
                    inputMode="numeric"
                    min={1}
                    max={9999} 
                    title="Bags on the hole point value." 
                    onChange={(e) => props.editPointsOn(e.target.value)}
                />
                <label htmlFor="onVal">Bags on the hole point value.</label>
            </div>
            {renderSavePopup()}
        </div>
    )
}

const mapStateToProps = (state, passed) => {
    //console.log(state.config, passed)
    return {
        ui: state.ui,
        config: state.config
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        changeTargetPts: (newTarget) => dispatch(editTargetPts(newTarget)),
        changeBagCount: (newCount) => dispatch(editBagCount(newCount)),
        handlePtsCancel: (val) =>  dispatch(editPtsCancel(val)),
        editPointsOn: (pts) => dispatch(editOnPts(pts)),
        editPountsIn: (pts) => dispatch(editInPts(pts)),
        handleSaveEdits: () => dispatch(saveEdits()),
        handleCancelEdits: () => dispatch(discardEdits())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsContainer)