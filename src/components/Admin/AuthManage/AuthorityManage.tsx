import React, { Component } from "react";
import Panel from "../../public/AdminPanel"
import { Tabs, Row, Col, Switch, Form } from "antd";
import memsData from '../../../test/members';
const { TabPane } = Tabs;

interface Member {
    type: string,
    memId: number,
    name: string,
    campus: number
}

interface Props {

}

interface State {

}

class AuthorityManage extends Component<Props, State>{

    campusSwitch = (campus: number) => {
        if (campus === 0) {
            return "卫津路"
        } else if (campus === 1) {
            return "北洋园"
        }
    }

    isChecked = (auth: string) => {
        if (auth === "组长") {
            return true
        } else {
            return false
        }
    }

    onChange(checked: any, event: any) {
        console.log(`switch to ${checked}`);
    }

    renderMems() {
        let memLeader: JSX.Element[] = [], memMember: JSX.Element[] = [];
        let data = memsData.data;
        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                let _item: Member = data[i]
                memLeader.push(
                    <Row className="mem-card card-shadow" key={_item.memId}>
                        <Col span={4}>{_item.name}</Col>
                        <Col span={16}>{this.campusSwitch(_item.campus) + "校区"}</Col>
                        <Col span={4}>
                            <Form.Item name={`switch${_item.memId}`}>
                                <Switch
                                    checkedChildren="组长"
                                    unCheckedChildren="组员"
                                    onClick={this.onChange}
                                    defaultChecked={this.isChecked(_item.type)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                )
            }
        }
        return (
            <div className="mem-content-by-group">
                <div className="mem-cards">
                    <Form>
                        {memLeader}
                    </Form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="auth-manage">
                <Panel />
                <div className="admin-title">权限管理</div>
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

export default AuthorityManage