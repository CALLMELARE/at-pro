import React, { Component } from 'react';
import { Descriptions, Card, Collapse, Table } from 'antd';
import MessageBox from './MessageBox';
import '../../styles/message.scss';

const { Panel } = Collapse;

class Message extends Component {

    render() {
        return (
            <div>
                <p className="mes-title">消息中心</p>
                <div className="mes-card">
                    <MessageBox title="成员信息" />
                </div>
                <div className="mes-card">
                    <MessageBox title="系统消息" />
                </div>
            </div>
        )
    }
}

export default Message
