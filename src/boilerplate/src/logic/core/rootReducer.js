import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news from './../domains/news/reducers';

export default combineReducers({
    news,
    routing: routerReducer
});