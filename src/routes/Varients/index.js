import React from 'react'
import Classic from './classic'
import DeadOn from './deadOn'
import Seven21 from './seven21'

const Varients = () => {
    return (
        <div className="varients-container">
            <Classic/>
            <DeadOn/>
            <Seven21/>
        </div>
    )
}

export default Varients;