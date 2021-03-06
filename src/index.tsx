import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { createStore, Store } from 'redux';
import RouteConfig from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// import { Provider } from "react-redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

const Root = () => (
  <Router basename="/at-pro">
    <ConfigProvider locale={zhCN}>
      <RouteConfig />
    </ConfigProvider>
  </Router>
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
