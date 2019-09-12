import React from 'react'
import { connect } from 'react-redux'
import NameEditor from './components/namEditor/nameEditor'
import MenuButton from '../../components/MenuButton'
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
import './settings.scss';
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
            <div className="menu-container">
                <MenuButton />

            </div>
            <h2 className="title">Settings</h2>
            <NameEditor team1/>
            <NameEditor />
            <div className="game-config">
                <div className="ctrl-item">
                    <label htmlFor="bagNum">{`Bags per team: ${settings.bags * 2} total bags:`}</label>
                    <input 
                        id="bagNum"
                        type="number"
                        defaultValue={settings.bags}
                        min={1}
                        max={10} 
                        pattern="[0-9]"
                        maxlength={2}
                        inputMode="numeric"
                        title="Number of bags per team" 
                        onChange={(e) => props.changeBagCount(e.target.value)}
                    />
                </div>
                <div className="ctrl-item">
                    <label htmlFor="ptsCancel">Same Points Cancel</label>
                    <input 
                        id="ptsCancel"
                        type="checkbox" 
                        title="Should points cancel?" 
                        checked={settings.ptsCancel}
                        onChange={(e) => props.handlePtsCancel(e.target.checked)}
                    />
                </div>
                <div className="ctrl-item">
                    <label htmlFor="targetScore">Target Point Value:</label>
                    <input 
                        id="targetScore"
                        type="number"
                        defaultValue={settings.targetScore}
                        min={1}
                        max={9999}
                        pattern="[0-9]" 
                        title="Minimum points to win:" 
                        onChange={(e) => props.changeTargetPts(e.target.value)}
                    />
                </div>
                <div className="ctrl-item">
                    <label htmlFor="inVal">Bags in the hole point value:</label>
                    <input 
                        id="inVal"
                        type="number"
                        defaultValue={settings.inVal}
                        inputMode="numeric"
                        min={1}
                        max={9999}
                        pattern="[0-9]" 
                        title="Points for gettings bags in the hole:" 
                        onChange={(e) => props.editPountsIn(e.target.value)}
                    />
                </div>
                <div className="ctrl-item">
                    <label htmlFor="onVal">Bags on the hole point value:</label>
                    <input 
                        id="onVal"
                        type="number"
                        defaultValue={settings.onVal}
                        inputMode="numeric"
                        min={1}
                        max={9999}
                        pattern="[0-9]" 
                        title="Bags on the hole point value:" 
                        onChange={(e) => props.editPointsOn(e.target.value)}
                    />
                </div>
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