import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './logic/core/configureStore';
import Routes from './routes/Routes'

const store = configureStore();

const App = ()=> (
    <Provider store={store}>
        <Routes store={store}/>
    </Provider>
);

export default App;