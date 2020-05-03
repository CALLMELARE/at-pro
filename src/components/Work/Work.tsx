import React, { Component } from 'react';
import { EditOutlined, BookOutlined } from '@ant-design/icons';
import { Row, Col, Tabs, Table } from 'antd';
import Donut from '../public/ActivityDonut';
import '../../styles/work.scss';
import { Link } from 'react-router-dom';
import activityData from '../../test/activity';
import activityFinishedData from '../../test/activityFinished';

const actData = activityData.data;
const finData = activityFinishedData.data;

const { TabPane } = Tabs;

const columns = [{
    title: '会议名称',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '会议时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '发起人',
    dataIndex: 'host',
    key: 'host',
}]

class Message extends Component<any, any> {
    render() {
        return (
            <div>
                <div className="work-title">工作区</div>
                <Row className="work-space" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12} >
                        <Link to="/Work/EditReport">
                            <div className="work-space-card card-shadow">
                                <EditOutlined style={{ fontSize: "5rem", color: "#CFCFCF" }} />
                                <span>编辑周报</span>
                            </div>
                        </Link>
                    </Col>
                    <Col span={12} >
                        <Link to="">
                            <div className="work-space-card card-shadow">
                                <BookOutlined style={{ fontSize: "5rem", color: "#CFCFCF" }} />
                                <span>工作日志</span>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <div className="work-title">会议记录</div>
                <Tabs defaultActiveKey="1" className="work-tabs">
                    <TabPane tab="未完成" key="1" className="work-tab">
                        <Table columns={columns} dataSource={actData} pagination={false} />
                        <p className="no-more">没有更多了鸭_(:з」∠)_</p>
                    </TabPane>
                    <TabPane tab="已完成" key="2" className="work-tab">
                        <Table columns={columns} dataSource={finData} pagination={false} />
                        <p className="work-title">参与程度</p>
                        <Donut />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Message
