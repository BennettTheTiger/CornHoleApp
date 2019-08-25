import React from 'react';
import {connect} from 'react-redux'
import { toggleNavAction } from './actions';

const MenuButton = (props) => {
    const {
        isMenuOpen, 
        toggleNav,
        title,
        navItem
    } = props

    const renderAsButton = () => {
        return(
            <div className="menu-btn">
                <button onClick={()=>toggleNav(isMenuOpen)}>{title}</button>
            </div>
        )
    }

    const renderAsNavLink = () => {
        return (
            <span onClick={()=>toggleNav(isMenuOpen)}>{title}</span>  
        )
    }

    return (
        navItem ? renderAsNavLink() : renderAsButton()
    )
}

MenuButton.defaultProps = {
    toggleNav: () => console.log('Toggle Nav Called with'),
    navItem : false,
    title: 'Menu'
}

const mapStateToProps = (state, passed) => {
    return {
        ...passed,
        isMenuOpen: state.ui.menuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNav: (open) => dispatch(toggleNavAction(open)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuButton);