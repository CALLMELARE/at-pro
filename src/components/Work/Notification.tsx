import React from 'react';
import { Descriptions, Card, Collapse, Drawer } from 'antd';
import Notification from './Notification';
import '../../styles/profile.scss';

class Message extends React.PureComponent<any, any> {

    render() {
        return (
            <div>
                <Drawer
                    title="最新通知"
                    placement='right'
                    closable={false}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}

export default Message
