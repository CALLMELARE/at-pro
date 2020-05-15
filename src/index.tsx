import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, Store } from 'redux';
import AtStore from './store/reducers';
import RouteConfig from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(AtStore, composeWithDevTools())

const Root = () => (
  <Provider store={store} >
    <Router>
      <RouteConfig />
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
