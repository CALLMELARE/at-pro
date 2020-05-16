import React, { Component } from 'react';
import { Divider, Row, Col, Button } from 'antd';
import icon from '../../../assets/usericon.png';
import { Link } from 'react-router-dom';

export interface Props {

}

export interface State {

}

class WeekReport extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="work-title">周报</div>
                <div className="report-card">
                    <Row className="report-header">
                        <Col span={4} className="report-icon">
                            <img src={icon} alt="Icon" />
                        </Col>
                        <Col span={10} className="report-basic">
                            <span className="report-basic-title">第20200202期周报</span>
                            <span className="report-basic-last">最近编辑于{4}天前</span>
                        </Col>
                        <Col span={10} className="report-btns">
                            <Row >
                                <Link to={`/Work/EditReport?id=${0}`}>
                                <Button className="report-btn-edit">去编辑</Button>
                                </Link>
                                <Button className="report-btn-other">随便看看</Button>
                            </Row>
                        </Col>
                    </Row>
                    <Divider dashed className="divider-dashed" />
                    <div className="report-content"></div>
                </div>
            </div>
        );
    }
}

export default WeekReport;