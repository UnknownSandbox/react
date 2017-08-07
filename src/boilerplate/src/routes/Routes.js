import React from 'react';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import MainLayout from '../view/layouts/material';
import NotFound from './../view/pages/notFound'
import Auth from './../view/pages/auth/auth'
import Reg from './../view/pages/reg/reg'

const Routes = ({store}) => {
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Router history={history}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Reg}/>
                <Route path="/news" component={NotFound}/>
                <Route path="/signup" component={Reg}/>
                <Route path="/login" component={Auth}/>
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    );
};

export default Routes;