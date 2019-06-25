import React from 'react'
import PointLabel from './pointLabel';
import PointButton from './pointButton';
import '../styles/controlGroup.scss';

class ControlGroup extends React.Component {



render(){
    return(
        <div className="ctrlGroup">
            <PointLabel pts={3}/>
            <PointButton name="Up"/>
            <PointButton name="Down"/>
        </div>
    )
}
   
}

export default ControlGroup