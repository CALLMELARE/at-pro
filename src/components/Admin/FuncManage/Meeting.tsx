import React from 'react';
import Panel from '../../public/AdminPanel';
import Header from './FunctionHeader';
import { Tabs, Row, Col } from 'antd';
import activityData from '../../../test/activity';
import activityFinishedData from '../../../test/activityFinished';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const actData = activityData.data;
const finData = activityFinishedData.data;

export interface Props {

}

export interface State {

}

class Meeting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    renderAct = () => {
        // 未完成的活动单项
        const data = actData;
        const list: JSX.Element[] = [];
        data.map((item) => {
            list.push(
                <Row className="work-tab-item">
                    <Col span={10}>{item.title}</Col>
                    <Col span={10}>{item.time}</Col>
                    <Col span={4}>{item.host}</Col>
                </Row>
            )
        })
        return list
    }

    renderFin = () => {
        // 已完成的活动单项
        const data = finData;
        const list: JSX.Element[] = [];
        data.map((item) => {
            list.push(
                <Row className="work-tab-item">
                    <Col span={10}><Link to={`/Admin/FunctionManage/MeetingDetail?id=${0}`}>{item.title}</Link></Col>
                    <Col span={10}>{item.time}</Col>
                    <Col span={4}>{item.host}</Col>
                </Row>
            )
        })
        return list
    }

    render() {
        return (
            <div className="func-meeting">
                <Panel />
                <Header />
                <div className="admin-title">会议记录</div>
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
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Meeting;