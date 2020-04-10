import React, { Component } from 'react';
import { Row, Col, Card, Badge } from 'antd';
import {
    MailOutlined
} from '@ant-design/icons';
import '../../styles/dashboard.scss';
import Heatmap from './Heatmap';

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

                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard