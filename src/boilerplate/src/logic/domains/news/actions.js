import * as actionNames from './constants';
import newsFakeData from './data';

function executeNewsAction(name, newsData) {
    return {
        type: name,
        payload: newsData
    };
}

export function loadNewsFromServer() {
    return function (dispatch) {
        newsFakeData.forEach((fakeNewsItem) => {
            dispatch(executeNewsAction(actionNames.NEWS_CREATE_NEW, fakeNewsItem))
        });
    };
}

export function createNewNewsItem(newNewsItem) {
    return function (dispatch) {
        dispatch(executeNewsAction(actionNames.NEWS_CREATE_NEW, newNewsItem))
    };
}

export function updateNewsItem(newsItem) {
    return function (dispatch) {
        dispatch(executeNewsAction(actionNames.NEWS_UPDATE_ITEM, newsItem))
    };
}

export function removeNewsItem(newsItem) {
    return function (dispatch) {
        dispatch(executeNewsAction(actionNames.NEWS_REMOVE_ITEM, newsItem))
    };
}