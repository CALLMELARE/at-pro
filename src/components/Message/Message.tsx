import React from 'react';
import { Descriptions, Card, Collapse } from 'antd';
import '../../styles/profile.scss';

const { Panel } = Collapse;


class Message extends React.PureComponent {

    render() {
        return (
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="成员消息" key="1">
                    </Panel>
                    <Panel header="会议" key="2">
                    </Panel>
                    <Panel header="活动" key="3">
                    </Panel>
                    <Panel header="系统" key="4">
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Message
