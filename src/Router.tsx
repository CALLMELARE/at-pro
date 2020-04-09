import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import NotFound from './pages/404';
import Login from './pages/Login';
import App from './App';

const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;

export default () => (
    <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/login" component={Login} />
        <Route path="/" render={props => {
            return isLogged
                ? <App {...props} />
                : <Redirect to="/login" />
        }} />
    </Switch>
);
