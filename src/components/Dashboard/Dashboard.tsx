import React, { Component } from 'react';
import { Row, Col, Card, Badge, Progress, Statistic, Button } from 'antd';
import {
    MailOutlined,
    PartitionOutlined,
    NotificationOutlined,
    UserSwitchOutlined,
    CalendarOutlined,
    UserOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
import '../../styles/dashboard.scss';
import { org } from '../../settings/settings'
import Heatmap from './Heatmap';
// import { userName } from '../../actions'
import mission from '../../test/discuss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const message = false;
const { Countdown } = Statistic;


interface Props {
    collapsed: boolean,
}

class Dashboard extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            joinTime: 33,
            DDLMouseOver: false
        }
    }

    greeting() {
        var hour = new Date().getHours()
        var greeting = ''
        if (hour < 6) {
            greeting = '夜深了'
        } else if (hour < 10) {
            greeting = '早上好'
        } else if (hour < 12) {
            greeting = '上午好'
        } else if (hour < 14) {
            greeting = '中午好'
        } else if (hour < 18) {
            greeting = '下午好'
        } else if (hour < 23) {
            greeting = '晚上好'
        } else {
            greeting = '夜深了'
        }
        return greeting
    }

    statusPoint = (status: number, withText: boolean) => {
        switch (status) {
            case 1:
                return <Badge status="success" text={withText ? "进行中" : null} />
            case 2:
                return <Badge status="warning" text={withText ? "状态不明" : null} />
            case 3:
                return <Badge status="error" text={withText ? "已完结" : null} />
            case 4:
                return <Badge status="default" text={withText ? "未开始" : null} />
        }
    }

    handleDDLClick = (e: any) => {
        e.preventDefault();
        this.setState({
            DDLMouseOver: !this.state.DDLMouseOver
        })
    }

    calcProgress = (startTime: string, endTime: string) => {
        let start = new Date(startTime);
        let end = new Date(endTime);
        let now = new Date();
        if (now.getTime() - end.getTime() < 0) {
            return Math.ceil((now.getTime() - start.getTime()) / (end.getTime() - start.getTime()) * 100)
        } else {
            return 100
        }
    }

    renderMissionList = () => {
        let list: JSX.Element[] = [];
        let data = mission.data;
        data.map((item) => {
            let deadline = new Date(item.endTime);
            list.push(
                <div className="dashboard-mission-card card-shadow" key={0}>
                    <p className="dashboard-mission-title">
                        <span>{item.title}</span>
                        <span className="dashboard-mission-status">{this.statusPoint(item.status, true)}</span>
                    </p>
                    <div className="dashboard-mission-right">
                        <div className="dashboard-mission-btns">
                            <Link to={`/Work/WorkSpace?id=${0}`}><CalendarOutlined /></Link>
                        </div>
                        <div className="dashboard-mission-progress" onClick={this.handleDDLClick.bind(this)}>
                            <p>时间进程</p>
                            {this.state.DDLMouseOver ?
                                <Countdown value={deadline.getTime()} format="D 天 H 时 m 分 s 秒" />
                                :
                                <Progress status="active" percent={this.calcProgress(item.startTime, item.endTime)} showInfo={false} />}
                        </div>
                    </div >
                </div >
            )
        })
        return list
    }

    componentDidMount() {

    }

    render() {
        const panelCtrl = sessionStorage.getItem("admin-panel");
        return (
            <div>
                {panelCtrl === "true" ?
                    <div className="admin-home">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={6}>
                                <Link to="/Admin/FunctionManage">
                                    <div className="admin-home-card card-shadow">
                                        <AppstoreAddOutlined style={{ fontSize: "5rem" }} />
                                        <span>功能管理</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col span={6}>
                                <Link to="/Admin/UserManage">
                                    <div className="admin-home-card card-shadow">
                                        <UserSwitchOutlined style={{ fontSize: "5rem" }} />
                                        <span>成员管理</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col span={6}>
                                <Link to="/Admin/AuthorityManage">
                                    <div className="admin-home-card card-shadow">
                                        <PartitionOutlined style={{ fontSize: "5rem" }} />
                                        <span>权限管理</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col span={6}>
                                <Link to="/Admin/SystemNotice">
                                    <div className="admin-home-card card-shadow">
                                        <NotificationOutlined style={{ fontSize: "5rem" }} />
                                        <span>系统公告</span>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div> :
                    <div>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={12}>
                                <div className="dashboard-title">
                                    {this.greeting() + "，" + sessionStorage.getItem("username")}
                                    <a href="/" className="dashboard-title-message">
                                        {message ? <MailOutlined style={{ fontSize: '1.25rem', color: '#00A1E9' }} /> : <MailOutlined style={{ fontSize: '1.25rem', color: '#DDDDDD' }} />}
                                    </a>
                                </div>
                                <Card className="card-shadow">
                                    <p>今天是你加入{org()}的第<span className="join-time">{this.state.joinTime}</span>天</p>
                                    <p><span className="dashboard-bold">账号：</span>testAccount</p>
                                    <p><span className="dashboard-bold">组别：</span>北洋园-随便什么组（成员）</p>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <div className="dashboard-title">周报</div>
                                <Card className="card-shadow">
                                    <p className="dashboard-bold">第{202015}期周报：<span className="dashboard-commit-status-not">未提交</span></p>
                                    <p className="dashboard-explain">起止时间：2020/04/07 ~ 2020/04/13</p>
                                    <p className="dashboard-explain">周报截止日期为周一，在时间范围内可以进行编辑。超过编辑时间的周报不能进行编辑。<a href="/Work/EditReport" className="dashboard-to-report">去编辑周报 >></a></p>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={24}>
                                <div className="dashboard-title">近期任务</div>
                                <p className="dashboard-badges">
                                    {this.statusPoint(1, true)}
                                    {this.statusPoint(2, true)}
                                    {this.statusPoint(3, true)}
                                    {this.statusPoint(4, true)}
                                </p>
                                {this.renderMissionList()}
                            </Col>
                        </Row>
                    </div>}
            </div>
        )
    }
}

export default Dashboard