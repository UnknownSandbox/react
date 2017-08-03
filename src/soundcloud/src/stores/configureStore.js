import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk, router, logger))(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}