import React from 'react'
import { connect } from 'react-redux'
import NameEditor from './components/namEditor/nameEditor'

const SettingsContainer = (props) => {

    console.warn(props);
    const { config, team1, team2 } = props;

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
                    defaultValue={config.bags}
                    min={0}
                    max={10} 
                    title="Number of bags per team" 
                    onChange={() => console.log('changed')}
                />
                <label for="bagNum">{`Bags per team: ${config.bags * 2} total bags.`}</label>
                <input 
                    id="ptsCancel"
                    type="checkbox" 
                    title="Should points cancel?" 
                    checked={config.ptsCancel}
                    onChange={() => console.log('changed')}
                />
                <label for="ptsCancel">Same Points Cancel</label>
                <input 
                    id="targetScore"
                    type="number"
                    defaultValue={config.targetScore}
                    min={0}
                    max={9999} 
                    title="Minimum points to win." 
                    checked={config.ptsCancel}
                    onChange={() => console.log('changed')}
                />
                <label for="targetScore">Target Point Value</label>
                <input 
                    id="inVal"
                    type="number"
                    defaultValue={config.inVal}
                    min={1}
                    max={9999} 
                    title="Points for gettings bags in the hole." 
                    checked={config.ptsCancel}
                    onChange={() => console.log('changed')}
                />
                <label for="inVal">Bags in the hole point value.</label>
                <input 
                    id="onVal"
                    type="number"
                    defaultValue={config.onVal}
                    min={1}
                    max={9999} 
                    title="Bags on the hole point value." 
                    checked={config.ptsCancel}
                    onChange={() => console.log('changed')}
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
        team1: state.team1,
        team2: state.team2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsContainer)