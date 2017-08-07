import * as actionNames from './constants';

function executeUIAction(name, newsData) {
    return {
        type: name,
        payload: newsData
    };
}

export function changeTheme(newTheme) {
    return function (dispatch) {
        dispatch(executeUIAction(actionNames.UI_CHANGE_THEME, newTheme))
    };
}

