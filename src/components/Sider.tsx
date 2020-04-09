import React, { Component } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import {
    HomeOutlined, UserOutlined, LogoutOutlined, MessageOutlined, TeamOutlined, ProjectOutlined
} from '@ant-design/icons';
import Footer from './Footer';
import twtlogo from '../assets/twtlogo_tilt.svg';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

interface Props {
    collapsed: boolean,
}

class SiderCustom extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    menuRender(state: boolean) {

    }

    render() {
        return (
            <Sider theme="light" trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" >
                    <img src={twtlogo} height="40" width="40" />
                    {this.props.collapsed ? null : "At"}
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" title="首页">
                        <Link to="/">
                            <HomeOutlined />
                            {this.props.collapsed ? null : "首页"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" title="消息">
                        <Link to="/">
                            <MessageOutlined />
                            {this.props.collapsed ? null : "消息"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" title="工作">
                        <Link to="/">
                            <ProjectOutlined />
                            {this.props.collapsed ? null : "工作"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" title="成员">
                        <Link to="/">
                            <TeamOutlined />
                            {this.props.collapsed ? null : "成员"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" title="个人">
                        <Link to="/Profile" >
                            <UserOutlined />
                            {this.props.collapsed ? null : "个人"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6" title="登出">
                        <Link to="/">
                            <LogoutOutlined />
                            {this.props.collapsed ? null : "登出"}
                        </Link>
                    </Menu.Item>
                </Menu>

            </Sider >
        )
    }
}

export default SiderCustom