import React from 'react';
import {connect} from 'react-redux'
import { toggleNavAction } from './actions';
import {ReactComponent as Hamburg} from '../../icons/hamburg.svg';
import './styles.scss';

const MenuButton = (props) => {
    const {
        isMenuOpen, 
        toggleNav,
        title,
        navItem
    } = props

    const buildButtonClasses = () =>{
        return `menu-btn ${title ? 'text' : 'icon'}`
    }

    const renderAsButton = () => {
        return(
            <div className={buildButtonClasses()}>
                <button onClick={()=>toggleNav(isMenuOpen)}>
                    {title ? title : isMenuOpen ? 'Close' : <Hamburg/>}
                </button> 
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