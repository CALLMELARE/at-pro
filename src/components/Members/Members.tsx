import React from 'react';
import { Tabs, Tooltip } from 'antd';
import {
    UserOutlined,
    MailOutlined
} from '@ant-design/icons';
import '../../styles/members.scss';
import memsData from '../../test/members';
import SendMessage from '../public/SendMessage';

const { TabPane } = Tabs;

interface Member {
    type: string,
    memId: number,
    name: string,
}

class Members extends React.PureComponent {
    renderMems() {
        let memLeader: JSX.Element[] = [], memMember: JSX.Element[] = [];
        let data = memsData.data;
        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                let _item: Member = data[i]
                if (_item.type === "组长") {
                    memLeader.push(
                        <div className="mem-card card-shadow">
                            <span>{_item.name}</span>
                            <div>
                                <SendMessage btncls="mem-mail-icon" content={<MailOutlined />} target={[_item.memId]} />
                                <Tooltip placement="bottom" title={"个人信息"}>
                                    <span className="mem-user-icon"><UserOutlined /></span>
                                </Tooltip>
                            </div>
                        </div>
                    )
                } else if (_item.type === "组员") {
                    memMember.push(
                        <div className="mem-card card-shadow">
                            <span>{_item.name}</span>
                            <div>
                                <SendMessage btncls="mem-mail-icon" content={<MailOutlined />} />
                                <Tooltip placement="bottom" title={"个人信息"}>
                                    <span className="mem-user-icon"><UserOutlined /></span>
                                </Tooltip>
                            </div>
                        </div>
                    )
                }
            }
        }
        return (
            <div className="mem-content-by-group">
                <p className="mem-title">组长</p>
                <div className="mem-cards">
                    {memLeader}
                </div>
                <p className="mem-title">组员</p>
                <div className="mem-cards">
                    {memMember}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <span className="mem-title">成员概况</span>
                <Tabs defaultActiveKey="1" className="mem-container">
                    <TabPane tab="产品组" key="1" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                    <TabPane tab="程序组" key="2" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                    <TabPane tab="前端组" key="3" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                    <TabPane tab="设计组" key="4" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                    <TabPane tab="Android组" key="5" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                    <TabPane tab="iOS组" key="6" className="mem-tabs">
                        {this.renderMems()}
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Members
