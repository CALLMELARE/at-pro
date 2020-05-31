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
const auth = sessionStorage.getItem("auth")

const { TabPane } = Tabs;

export interface Props {

}

export interface State {

}

const studioAttend = [
    {
        item: "出勤",
        count: 35
    },
    {
        item: "未出勤",
        count: 5
    }
];

const teamAttend = [
    {
        item: "出勤",
        count: 19
    },
    {
        item: "未出勤",
        count: 3
    }
];

const donutData = [
    {
        item: "工作室大会",
        count: 40
    },
    {
        item: "组会",
        count: 21
    }
];

class Message extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    calcAll = (data: any) => {
        let result = 0;
        data.map((item: any) => {
            result += item.count
        })
        return result
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
                        <p className="work-title-attend">参与程度</p>
                        <div style={{ display: "flex" }}>
                            <Donut data={donutData}
                                style={{ width: "33.333%" }}
                                title="出勤次数"
                                calc={"总计" + this.calcAll(donutData) + "次"}
                            />
                            <Donut
                                data={teamAttend}
                                style={{ width: "33.333%" }}
                                title="组会出勤"
                                calc={"出勤率" + (teamAttend[0].count / this.calcAll(teamAttend) * 100).toString().substr(0, 4) + "%"}
                            />
                            <Donut
                                data={studioAttend}
                                style={{ width: "33.333%" }}
                                title="工作室大会出勤次数"
                                calc={"出勤率" + (studioAttend[0].count / this.calcAll(studioAttend) * 100).toString().substr(0, 4) + "%"}
                            />
                        </div>
                    </TabPane>
                </Tabs>
                {auth === "2" ?
                    <Link to={`/Work/NewMeeting`} className="work-newmeeting card-shadow">
                        发起会议
                    </Link>
                    : null
                }
            </div>
        )
    }
}

export default Message
