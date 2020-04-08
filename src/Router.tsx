import React from 'react';
import { Route, Switch } from 'react-router';
import NotFound from './pages/404';
import Login from './pages/Login';
import App from './App';

export default () => (
    <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/login" component={Login}/>
        <Route path="/" component={App} />
    </Switch>
);
