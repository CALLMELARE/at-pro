import React from 'react';
import { Descriptions, Card, Collapse } from 'antd';
import '../../styles/message.scss';

const { Panel } = Collapse;

class Message extends React.PureComponent {

    render() {
        return (
            <div>
                <p className="mes-title">消息中心</p>
                <Collapse bordered={false} className="mes-collapse card-shadow">
                    <Panel header="私信" key="1" className="mes-panel">
                    </Panel>
                    <Panel header="会议" key="2" className="mes-panel">
                    </Panel>
                    <Panel header="活动" key="3" className="mes-panel">
                    </Panel>
                    <Panel header="系统" key="4" className="mes-panel">
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Message
