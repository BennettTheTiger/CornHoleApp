import React from 'react'
import Classic from './classic'
import DeadOn from './deadOn'
import Seven21 from './seven21'
import MenuButton from '../../components/MenuButton';
import './styles.scss';

const Varients = () => {
    return (
        <div className="varients-container">
            <div className="menu-container">
                <MenuButton/>
            </div>
            <Classic/>
            <DeadOn/>
            <Seven21/>
        </div>
    )
}

export default Varients;