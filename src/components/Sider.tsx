import React, { Component } from 'react';
import config from '../site-config.json';
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

    menuRender() {
        let pathname: string = window.location.pathname;
        switch (pathname.split("/")[1]) {
            case "":
                return ['1']
                break;
            case "Message":
                return ['2']
                break;
            case "Work":
                return ['3']
                break;
            case "Members":
                return ['4']
                break;
            case "Profile":
                return ['5']
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Sider theme="light" trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" >
                    <img src={twtlogo} height="40" width="40" />
                    {this.props.collapsed ? null : config.title}
                </div>
                <Menu theme="light" mode="inline" selectedKeys={this.menuRender()}>
                    <Menu.Item key="1" title="首页">
                        <Link to="/">
                            <HomeOutlined />
                            {this.props.collapsed ? null : "首页"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" title="消息">
                        <Link to="/Message">
                            <MessageOutlined />
                            {this.props.collapsed ? null : "消息"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" title="工作">
                        <Link to="/Work">
                            <ProjectOutlined />
                            {this.props.collapsed ? null : "工作"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" title="成员">
                        <Link to="/Members">
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
                </Menu>

            </Sider >
        )
    }
}

export default SiderCustom