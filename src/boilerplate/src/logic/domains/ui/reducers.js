import {handleActions} from 'redux-actions'
import * as actionNames from './constants'

const defaultState = {ui:{
    theme: {}
}};

const reducer = handleActions({
    [actionNames.UI_CHANGE_THEME](state, {payload}) {
        const newUI = [...ui, payload ];
        return {...state, ...newUI};
    }
}, defaultState);

export default reducer;