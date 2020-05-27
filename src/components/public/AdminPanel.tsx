import React, { Component } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import logo from '../../assets/twtlogo_tilt_white.svg';
import { Link } from 'react-router-dom';
import {
    MailOutlined,
    PartitionOutlined,
    NotificationOutlined,
    UserSwitchOutlined,
    CalendarOutlined,
    UserOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
import { Tooltip } from 'antd';

export interface Props {

}

export interface State {
    open: boolean
}

class AdminPanel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOnOpen = (e: any) => {
        e.preventDefault();
        let status = this.state.open;
        this.setState({
            open: !status
        })
    }

    render() {
        return (
            <div id={this.state.open ? "admin-panel-trans" : "admin-panel"}>
                <span className="admin-panel-icon" onClick={this.handleOnOpen.bind(this)}>
                    <img src={logo} alt="icon" height={40} width={40} />
                </span>
                <div id="admin-panel-menu">
                    <a href="#"><span className="a">
                        <Link to="/Admin/FunctionManage">
                            <AppstoreAddOutlined />
                        </Link>
                    </span></a>
                    <a href="#"><span className="b">
                        <Link to="/Admin/UserManage">
                            <UserSwitchOutlined />
                        </Link>
                    </span></a>
                    <a href="#"><span className="c">
                        <Link to="/Admin/AuthorityManage">
                            <PartitionOutlined />
                        </Link>
                    </span></a>
                    <a href="#"><span className="d">
                        <Link to="/Admin/SystemNotice">
                            <NotificationOutlined />
                        </Link>
                    </span></a>
                </div>
            </div >
        );
    }
}

export default AdminPanel;