import React, { Component } from 'react';
import { Row, Col, Card, Badge } from 'antd';
import {
    MailOutlined
} from '@ant-design/icons';
import '../../styles/dashboard.scss';
import Heatmap from './Heatmap';
import MdEditor from '../MdUnit/MdEditor';

const message = false;

interface Props {
    collapsed: boolean,
}

class Dashboard extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            joinTime: 33
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

    render() {
        return (
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div className="dashboard-title">
                            {this.greeting() + "，" + sessionStorage.getItem("username")}
                            <a href="/" className="dashboard-title-message">
                                {message ? <MailOutlined style={{ fontSize: '1.25rem', color: '#00A1E9' }} /> : <MailOutlined style={{ fontSize: '1.25rem', color: '#DDDDDD' }} />}
                            </a>
                        </div>
                        <Card>
                            <p>今天是你加入天外天工作室的第<span className="join-time">{this.state.joinTime}</span>天</p>
                            <p><span className="dashboard-bold">账号：</span>testAccount</p>
                            <p><span className="dashboard-bold">组别：</span>北洋园-随便什么组（成员）</p>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <div className="dashboard-title">周报</div>
                        <Card>
                            <p className="dashboard-bold">第{202015}期周报：<span className="dashboard-commit-status-not">未提交</span></p>
                            <p className="dashboard-explain">起止时间：2020/04/07 ~ 2020/04/13</p>
                            <p className="dashboard-explain">周报截止日期为每周周一，在时间范围内可以进行编辑。超过编辑时间的周报不能进行编辑。<a href="/" className="dashboard-to-report">去编辑周报 >></a></p>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                </Row>
            </div>
        )
    }
}

export default Dashboard