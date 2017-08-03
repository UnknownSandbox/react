import React from 'react';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import MainLayout from './../view/layouts/material';
import Hello from './../view/pages/hello';
import News from './../view/pages/news';


const Routes = ({store}) => {

    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Router history={history}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Hello}/>
                <Route path="/news" component={News}/>
            </Route>
        </Router>
    );
};

export default Routes;