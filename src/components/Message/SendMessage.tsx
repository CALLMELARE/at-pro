import React, { Component } from 'react';
import { Tabs, Tooltip, Modal, Button } from 'antd';
import {
    RocketOutlined,
    MailOutlined,
    CloseOutlined
} from '@ant-design/icons';

import '../../styles/message.scss';

interface propType {
    btncls: string,
    content: JSX.Element | string,
    target: []
}

class SendMessage extends Component<any, any> {
    constructor(props: propType) {
        super(props)
        this.state = {
            post: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            post: false,
            visible: false,
        });
    };

    handleOk = () => {
        this.setState({
            post: true,
        })
    };

    render() {
        return (
            <span>
                <Tooltip placement="bottom" title={"私信"}>
                    <button onClick={this.showModal} className={this.props.btncls}>{this.props.content}</button>
                </Tooltip>

                <div className={this.state.visible ? "send-message-page" : "hide"}>
                    <div className="send-message-container">
                        <div className="mail-port"></div>
                        <div className={this.state.post ? "message-send-animation" : "send-message-card"}>
                            <div className="send-message-title">发送私信<span><button onClick={this.handleCancel}><CloseOutlined /></button></span></div>
                            <form></form>
                            <Button key="submit" type="primary" onClick={this.handleOk}><RocketOutlined />发送</Button>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
}

export default SendMessage