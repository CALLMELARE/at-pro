import React, { Component } from 'react';
import './styles/layout.scss';
import { Layout } from 'antd';
import { Route } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import SiderCustom from './components/Sider';
import routes from './routes/routeConfig';
import './styles/common.scss';

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
    collapsed: false,
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
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="content-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {getRoute()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;