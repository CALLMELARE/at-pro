import React, { Component } from 'react';
import { Badge, Col, Row, Progress } from 'antd';
import discussData from '../../../test/discuss';
import maskImg from '../../../assets/PROJECT-bg.png';
import { Link } from 'react-router-dom';

export interface Props {

}

export interface State {

}

const bgStyle = {
    backgroundImage: `url(${maskImg})`,
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

class Discuss extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
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

    renderItem = () => {
        const data = discussData.data;
        const list: JSX.Element[] = [];
        data.map((item) => {
            list.push(
                <Col span={12} key={0}>
                    <Link to={`/Work/WorkSpace?id=${0}`}>
                        <div className="discuss-item card-shadow">
                            <div>
                                <span className="discuss-item-title">{this.statusPoint(item.status, false)}{item.title}</span>
                                <div className="discuss-item-content">
                                    <div>
                                        {item.status === 4 ? null : <span className="discuss-item-text1">团队：{item.team}</span>}
                                        <span className="discuss-item-text1">组建人：{item.host}</span>
                                    </div>
                                    <div>
                                        {item.status === 4 ? <span className="discuss-item-text2">项目开始时间：{item.startTime}</span> : null}
                                        {item.status === 4 ? null : <span className="discuss-item-text2">最近编辑者：{item.lastEditor}</span>}
                                        {item.status === 4 ? null : <span className="discuss-item-text2">最近编辑于：{item.lastEditTime}</span>}
                                    </div>
                                </div>
                            </div>
                            <Progress type="dashboard" percent={this.calcProgress(item.startTime, item.endTime)} />
                        </div>
                    </Link>
                </Col>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="discuss" style={bgStyle}>
                <div className="work-title">工作讨论区</div>
                <p className="discuss-badges">
                    {this.statusPoint(1, true)}
                    {this.statusPoint(2, true)}
                    {this.statusPoint(3, true)}
                    {this.statusPoint(4, true)}
                </p>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="discuss-items">
                    {this.renderItem()}
                </Row>
            </div>
        );
    }
}

export default Discuss;