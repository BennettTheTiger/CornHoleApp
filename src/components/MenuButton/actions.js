import {TOGGLE_NAV} from '../../redux/types'
import {hideNav, showNav } from '../../utils/navMover';

export const toggleNavAction = (isOpen) => {
    return (dispatch) =>{
        isOpen ? hideNav() : showNav();
        dispatch({type:TOGGLE_NAV,isOpen: !isOpen})
    }
}