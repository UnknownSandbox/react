import { combineReducers } from 'redux';
import uiReducer from './../view/core/uiReducer';
import logicReducer from './../logic/core/logicReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    ui: uiReducer,
    logic: logicReducer,
    routing: routerReducer
});