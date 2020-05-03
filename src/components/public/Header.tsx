import React, { Component } from 'react';
import { Layout } from 'antd';
import Notification from '../Work/Notification';
import { siteTitle } from '../../settings/settings'
import { Link } from 'react-router-dom';
import twtlogo from '../../assets/twtlogo_tilt.svg';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
    BellOutlined,
    HomeOutlined
} from '@ant-design/icons';

class HeaderComponent extends Component<any, any>{
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
                            {this.props.collapsed ? null : siteTitle()}
                        </div>
                    </p>
                    : null}
                <div>
                    <a className="noti-button" onClick={this.showDrawer}><BellOutlined /></a>
                    <Link className="logout" to="/logout">
                        <LogoutOutlined />
                    </Link>
                    <Notification visible={this.props.visible} onClose={this.onClose} />
                </div>
            </div>
        )
    }
}

export default HeaderComponent