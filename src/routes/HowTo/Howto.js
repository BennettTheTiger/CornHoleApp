import React from 'react'
import GameSetup from './varients/GameSetup'
import Fouls from './varients/Fouls'

const HowTo = () => {
return (
    <div className="how-to">
        <h2>Rules</h2>
        <GameSetup/>
        <Fouls/>
    </div>
)
}

export default HowTo