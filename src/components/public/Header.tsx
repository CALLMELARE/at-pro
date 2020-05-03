import React, { Component } from 'react';
import { Layout } from 'antd';
import Notification from '../Work/Notification';
import { Link } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
    BellOutlined
} from '@ant-design/icons';


const { Header, Content } = Layout;

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
            <div className={panelCtrl==="true"?"panel-admin":"panel-user"}>
                <div>
                    {panelCtrl === "true" ? null: React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.props.toggle,
                    })}
                </div>
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