import React, { Component } from 'react';
import './styles/layout.scss';
import { Layout, Button, Popover } from 'antd';
import { Route, Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined
} from '@ant-design/icons';
import SiderCustom from './components/public/Sider';
import routes from './routes/routeConfig';
import './styles/common.scss';
import HeaderComponent from './components/public/Header';
const { Header, Content } = Layout;

export interface Props {

}

export interface State {
  collapsed: boolean,
  visible: boolean
}

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

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: true,
      visible: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const panelCtrl = sessionStorage.getItem("admin-panel");
    return (
      <Layout className={panelCtrl==="true"?"App AppHeight":"App"}>
        {panelCtrl === "true" ? null : <SiderCustom collapsed={this.state.collapsed} />}
        <Layout className="site-layout">
          <Header className="header-background" style={{ padding: 0 }}>
            <HeaderComponent collapsed={this.state.collapsed} toggle={this.toggle} visible={this.state.visible} />
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