import React, { Component } from 'react';
import './styles/layout.scss';
import { Layout, Button, Popover } from 'antd';
import { Route, Link } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined
} from '@ant-design/icons';
import SiderCustom from './components/Sider';
import routes from './routes/routeConfig';
import './styles/common.scss';
import Notification from './components/Work/Notification';

const { Header, Content } = Layout;

function getRoute() {
  const routeList: any = [];
  routes.forEach((rt) => {
    const route = (r: any) => (
      <Route
        key={r.path}
        exact
        path={r.path}
        component={r.component}
      />
    );
    if (rt.component) {
      routeList.push(route(rt));
    }
  });
  return routeList;
}

class App extends Component<any, any> {
  state = {
    collapsed: true,
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="App">
        <SiderCustom collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <Header className="header-background" style={{ padding: 0 }}>
            <div>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </div>
            <div>
              <a className="noti-button" onClick={this.showDrawer}><BellOutlined /></a>
              <Link className="logout" to="/logout">
                <LogoutOutlined />
              </Link>
              <Notification visible={this.state.visible} onClose={this.onClose} />
            </div>
          </Header>
          <Content className="content-background">
            <div className="widCtrl">
              {getRoute()}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;