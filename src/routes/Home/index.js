import React from 'react';
import MenuButton from '../../components/MenuButton';
import { ReactComponent as CornHoleSVG } from '../../icons/cornHole.svg';
import './landingStyles.scss'

const LandingPage = () =>{
    return(
        <div className="landing-page">
            <CornHoleSVG/>
            <h2>Corn Hole Score</h2>
            <p>Focus on the game not the score! <span role="img" aria-label="cheers">🍻</span></p>
            <MenuButton title="Lets Play!"/>
        </div>
    )

}

export default LandingPage;