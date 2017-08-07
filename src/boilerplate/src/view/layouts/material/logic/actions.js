import * as actionNames from './constants';

function executeUIAction(name, newsData) {
    return {
        type: name,
        payload: newsData
    };
}


export function toggleDrawer(data) {
    return function (dispatch) {
        dispatch(executeUIAction(actionNames.STATE_TOGGLE_DRAWER_STATE, data))
    };
}

export function changePage(pageUrl,router) {
    return function (dispatch) {
        router.push(pageUrl);
        dispatch(executeUIAction(actionNames.STATE_TOGGLE_DRAWER_STATE, false))
    };
}

