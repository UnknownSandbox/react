import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './core/configureStore';
import Routes from './routes/Routes'
import { loadNewsFromServer } from './logic/domains/news/actions'

const store = configureStore();

const App = ()=> (
    <Provider store={store}>
        <Routes store={store}/>
    </Provider>
);

store.dispatch(loadNewsFromServer());

export default App;