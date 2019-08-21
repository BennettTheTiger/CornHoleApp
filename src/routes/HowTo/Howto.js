import React from 'react'
import GameSetup from './rules/GameSetup'
import Fouls from './rules/Fouls'

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