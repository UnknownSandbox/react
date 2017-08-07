import {handleActions} from 'redux-actions'
import * as actionNames from './constants'
import defaultState from './defaultState';
import dotProp from 'dot-prop-immutable';

const reducer = handleActions({
    [actionNames.STATE_TOGGLE_DRAWER_STATE](state, {payload = null}) {
        const isOpen = payload ? payload : !dotProp.get(state, `states.isDrawerOpen`);
        return dotProp.set(state, `states.isDrawerOpen`, isOpen);
    }
}, defaultState);

export default reducer;