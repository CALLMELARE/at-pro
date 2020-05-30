import React, { Component } from "react";
import Panel from '../../public/AdminPanel';
import { Tabs, Row, Col, message } from "antd";
import {
    RollbackOutlined
} from '@ant-design/icons';
import deluser from '../../../test/deleteduser';
const { TabPane } = Tabs;

interface Member {
    type: string,
    memId: number,
    name: string,
    campus: number
}

export interface Props {

}

export interface State {

}

class DeletedUser extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    campusSwitch = (campus: number) => {
        if (campus === 0) {
            return "卫津路"
        } else if (campus === 1) {
            return "北洋园"
        }
    }

    handleRecovery = (name: string) => {
        message.error(`已删除用户 ${name} 恢复失败，请检查网络`);
    }

    renderMems() {
        let memLeader: JSX.Element[] = [], memMember: JSX.Element[] = [];
        let data = deluser.data;
        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                let _item: Member = data[i]
                memMember.push(
                    <Row className="account-card card-shadow" key={_item.memId}>
                        <Col span={4}>{_item.name}</Col>
                        <Col span={16}>{this.campusSwitch(_item.campus) + "校区"}</Col>
                        <Col span={4}>
                            <RollbackOutlined onClick={this.handleRecovery.bind(this, _item.name)} className="recover-btn" />
                        </Col>
                    </Row>
                )
            }
        }
        return (
            <div className="mem-content-by-group">
                <div className="mem-cards">
                    {memMember}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Panel />
                <div className="admin-title">OOPS！</div>
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
        );
    }
}

export default DeletedUser;