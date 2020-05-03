import React from 'react';
import { Drawer } from 'antd';
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

                </Drawer>
            </div>
        )
    }
}

export default Message
