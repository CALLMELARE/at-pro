import React, { Component } from 'react';
import { Layout, Badge } from 'antd';
import Notification from './Notification';
import { siteTitle } from '../../settings/settings'
import { Link } from 'react-router-dom';
import twtlogo from '../../assets/twtlogo_tilt.svg';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
    BellOutlined,
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons';

export interface Props {
    toggle: any,
    visible: boolean,
    collapsed: boolean
}

export interface State {
    notiCount: number,
    visible: boolean
}

class HeaderComponent extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false,
            notiCount: 0
        }
    }

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

    render() {
        const panelCtrl = sessionStorage.getItem("admin-panel");
        return (
            <div className={panelCtrl === "true" ? "panel-admin" : "panel-user"}>
                <div>
                    {panelCtrl === "true" ?
                        React.createElement(HomeOutlined, {
                            className: 'panel-admin-home',
                            onClick: () => { window.location.href = "/" },
                        }) : React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.props.toggle,
                        })}
                </div>
                {panelCtrl === "true" ?
                    <p>
                        <div className="logo" >
                            <img src={twtlogo} height="40" width="40" />
                            {siteTitle()}
                        </div>
                    </p>
                    : null}
                {panelCtrl === "true" ? <div style={{ marginRight: "1rem" }}>
                    <Link className="logout" to="/logout">
                        <LogoutOutlined />
                    </Link>
                </div>
                    :
                    <div style={{ marginRight: "1rem" }}>
                        <a className="noti-button" onClick={this.showDrawer}><BellOutlined /></a>
                        <Link className="logout" to="/Profile">
                            <UserOutlined />
                        </Link>
                        <Link className="logout" to="/logout">
                            <LogoutOutlined />
                        </Link>
                        <Notification visible={this.state.visible} onClose={this.onClose} />
                    </div>}
            </div>
        )
    }
}

export default HeaderComponent