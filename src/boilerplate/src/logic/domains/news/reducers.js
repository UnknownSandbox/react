import {handleActions} from 'redux-actions'
import * as actionNames from './constants'

const defaultState = {news: []};

const reducer = handleActions({
    [actionNames.NEWS_CREATE_NEW](state, {payload}) {
        payload.id = payload.id ? payload.id : state.news.length + 1;
        return {...state, news: state.news.concat(payload)};
    },
    [actionNames.NEWS_REMOVE_ITEM](state, {payload}) {
        return {...state, news: state.news.filter(newsItem => newsItem.id !== payload.id)};
    },
    [actionNames.NEWS_UPDATE_ITEM](state, {payload}) {
        return {
            ...state,
            news: state.news.map(newsItem => newsItem.id === payload.id ? [...newsItem, ...payload] : newsItem)
        }
    }
}, defaultState);

export default reducer;