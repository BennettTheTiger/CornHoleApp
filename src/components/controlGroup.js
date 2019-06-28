import React from 'react'
import PointLabel from './pointLabel';
import PointButton from './pointButton';
import '../styles/controlGroup.scss';

class ControlGroup extends React.Component {

render(){
    return(
        <div className="ctrlGroup">
            <PointButton name="-"/>
            <PointLabel  pts={0}/>
            <PointButton name="+"/>
        </div>
    )
}
   
}

export default ControlGroup