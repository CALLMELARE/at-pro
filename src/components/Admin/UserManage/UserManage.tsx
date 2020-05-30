import React, { Component } from "react";
import Panel from '../../public/AdminPanel';
import { Tabs, Row, Col, message } from "antd";
import memsData from '../../../test/members';
import { Link } from "react-router-dom";
import {
    CloseCircleOutlined,
    PlusOutlined,
    DeleteOutlined
} from '@ant-design/icons';
const { TabPane } = Tabs;

export interface Props {

}

export interface State {

}

interface Member {
    type: string,
    memId: number,
    name: string,
    campus: number
}

class UserManage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    handleDelete = (name: string) => {
        message.error(`用户 ${name} 删除失败，请检查网络`);
    }

    campusSwitch = (campus: number) => {
        if (campus === 0) {
            return "卫津路"
        } else if (campus === 1) {
            return "北洋园"
        }
    }

    renderMems() {
        let memLeader: JSX.Element[] = [], memMember: JSX.Element[] = [];
        let data = memsData.data;
        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                let _item: Member = data[i]
                if (_item.type === "组长") {
                    memLeader.push(
                        <Row className="account-card card-shadow" key={_item.memId}>
                            <Col span={4}>{_item.name}</Col>
                            <Col span={16}>{this.campusSwitch(_item.campus) + "校区"}</Col>
                            <Col span={4}>
                                <CloseCircleOutlined onClick={this.handleDelete.bind(this, _item.name)} className="del-btn" />
                            </Col>
                        </Row>
                    )
                } else if (_item.type === "组员") {
                    memMember.push(
                        <Row className="account-card card-shadow" key={_item.memId}>
                            <Col span={4}>{_item.name}</Col>
                            <Col span={16}>{this.campusSwitch(_item.campus) + "校区"}</Col>
                            <Col span={4}>
                                <CloseCircleOutlined onClick={this.handleDelete.bind(this, _item.name)} className="del-btn" />
                            </Col>
                        </Row>
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
                <Panel />
                <div className="admin-title">成员管理</div>
                <div className="usermanage-btns">
                    <Link className="add card-shadow" to="/Admin/UserManage/AddUser">
                        <div><PlusOutlined /> 添加成员</div>
                    </Link>
                    <Link className="delete card-shadow" to="/Admin/UserManage/DeletedUser">
                        <div><DeleteOutlined /> OOPS！</div>
                    </Link>
                </div>
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

export default UserManage;