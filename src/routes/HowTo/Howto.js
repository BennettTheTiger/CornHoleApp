import React from 'react'
import GameSetup from './rules/GameSetup'
import Fouls from './rules/Fouls'
import MenuButton from '../../components/MenuButton';
import './styles.scss';

const HowTo = () => {
return (
    <div className="how-to">
        <div className="menu-container">
            <MenuButton/>
        </div>
        <h2>Rules</h2>
        <GameSetup/>
        <Fouls/>
    </div>
)
}

export default HowTo