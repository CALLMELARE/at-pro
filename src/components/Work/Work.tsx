import React, { Component } from 'react';
import { EditOutlined, CommentOutlined } from '@ant-design/icons';
import { Row, Col, Tabs, Table } from 'antd';
import Donut from '../public/ActivityDonut';
import '../../styles/work.scss';
import { Link } from 'react-router-dom';
import activityData from '../../test/activity';
import activityFinishedData from '../../test/activityFinished';

const actData = activityData.data;
const finData = activityFinishedData.data;

const { TabPane } = Tabs;

export interface Props {

}

export interface State {

}

class Message extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    renderAct = () => {
        // 未完成的活动单项
        const data = actData;
        const list: JSX.Element[] = [];
        data.map((item) => {
            list.push(<Row className="work-tab-item">
                <Col span={10}><Link to={`/Work/Meeting?id=${0}`}>{item.title}</Link></Col>
                <Col span={10}>{item.time}</Col>
                <Col span={4}>{item.host}</Col>
            </Row>)
        })
        return list
    }

    renderFin = () => {
        // 已完成的活动单项
        const data = finData;
        const list: JSX.Element[] = [];
        data.map((item) => {
            list.push(<Row className="work-tab-item">
                <Col span={10}><Link to={`/Work/HistoryMeeting?id=${0}`}>{item.title}</Link></Col>
                <Col span={10}>{item.time}</Col>
                <Col span={4}>{item.host}</Col>
            </Row>)
        })
        return list
    }

    render() {
        return (
            <div>
                <div className="work-title">工作区</div>
                <Row className="work-space" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12} >
                        <Link to="/Work/Report">
                            <div className="work-space-card card-shadow">
                                <EditOutlined style={{ fontSize: "5rem", color: "#CFCFCF" }} />
                                <span>周报</span>
                            </div>
                        </Link>
                    </Col>
                    <Col span={12} >
                        <Link to="/Work/Discuss">
                            <div className="work-space-card card-shadow">
                                <CommentOutlined style={{ fontSize: "5rem", color: "#CFCFCF" }} />
                                <span>讨论区</span>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <div className="work-title">会议记录</div>
                <Tabs defaultActiveKey="1" className="work-tabs">
                    <TabPane tab="未完成" key="1" className="work-tab">
                        <Row className="work-tab-titles">
                            <Col className="work-tab-title" span={10}>会议名称</Col>
                            <Col className="work-tab-title" span={10}>会议时间</Col>
                            <Col className="work-tab-title" span={4}>发起人</Col>
                        </Row>
                        <div className="work-tab-list">
                            {this.renderAct()}
                        </div>
                        <p className="no-more">没有更多了鸭 _(:з」∠)_</p>
                    </TabPane>
                    <TabPane tab="已完成" key="2" className="work-tab">
                        <Row className="work-tab-titles">
                            <Col className="work-tab-title" span={10}>会议名称</Col>
                            <Col className="work-tab-title" span={10}>会议时间</Col>
                            <Col className="work-tab-title" span={4}>发起人</Col>
                        </Row>
                        <div className="work-tab-list">
                            {this.renderFin()}
                        </div>
                        <p className="no-more">没有更多了鸭 _(:з」∠)_</p>
                        <p className="work-title">参与程度</p>
                        <Donut />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Message
