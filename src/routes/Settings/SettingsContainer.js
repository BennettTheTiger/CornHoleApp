import React from 'react'
import { connect } from 'react-redux'
import NameEditor from './components/namEditor/nameEditor'
import {
    editPtsCancel,
    editTeam1Name,
    editOnPts,
    editInPts
} from './actions'
const R = require('ramda');


const SettingsContainer = (props) => {

    console.warn(props);
    const { 
        ui, 
        team1, 
        team2 
    } = props;

    const settings = ui.config.basicConfig;
    
    return(
        <div className="settings">
            <h2>Settings</h2>
            <NameEditor placeholder={team1.name}/>
            <NameEditor placeholder={team2.name}/>
            <div className="game-varients">

            </div>
            <div className="game-config">
                <input 
                    id="bagNum"
                    type="number"
                    defaultValue={settings.bags}
                    min={0}
                    max={10} 
                    title="Number of bags per team" 
                    onChange={() => console.log('changed')}
                />
                <label for="bagNum">{`Bags per team: ${settings.bags * 2} total bags.`}</label>
                <input 
                    id="ptsCancel"
                    type="checkbox" 
                    title="Should points cancel?" 
                    //checked={settings.ptsCancel}
                    onChange={() => props.handlePtsCancel()}
                />
                <label for="ptsCancel">Same Points Cancel</label>
                <input 
                    id="targetScore"
                    type="number"
                    defaultValue={settings.targetScore}
                    min={0}
                    max={9999} 
                    title="Minimum points to win." 
                    checked={settings.ptsCancel}
                    onChange={() => console.log('changed')}
                />
                <label for="targetScore">Target Point Value</label>
                <input 
                    id="inVal"
                    type="number"
                    defaultValue={settings.inVal}
                    min={1}
                    max={9999} 
                    title="Points for gettings bags in the hole." 
                    checked={settings.ptsCancel}
                    onChange={() => console.log('changed')}
                />
                <label for="inVal">Bags in the hole point value.</label>
                <input 
                    id="onVal"
                    type="number"
                    defaultValue={settings.onVal}
                    min={1}
                    max={9999} 
                    title="Bags on the hole point value." 
                    onChange={(e) => props.editPointsOn(e.target.value)}
                />
                <label for="onVal">Bags on the hole point value.</label>
            </div>
            <button disabled>Save</button>
        </div>
    )
}

const mapStateToProps = (state, passed) => {
    //console.log(state.config, passed)
    return {
        config: state.config,
        ui: state.ui,
        team1: state.team1,
        team2: state.team2
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        editTeam1Name: () => dispatch(editTeam1Name()),
        handlePtsCancel: () =>  dispatch(editPtsCancel()),
        editPointsOn: (pts) => dispatch(editOnPts(pts)),
        editPountsIn: (pts) => dispatch(editInPts(pts))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsContainer)