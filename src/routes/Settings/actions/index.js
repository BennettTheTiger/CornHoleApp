import {TYPES} from './types';


// action creators
const editPtsCancel = () => {
    return editPtsCancel 
}
const editTeam1Name = () =>{
    return (dispatch) => {
       dispatch({type: TYPES.EDITTEAM1NAME, name: 'test'});
    }
}



module.exports = {
    editTeam1Name: editTeam1Name()
}