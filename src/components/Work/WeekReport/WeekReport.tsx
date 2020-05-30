import React, { Component } from 'react';
import { Divider, Row, Col, Button, Tag } from 'antd';
import icon from '../../../assets/usericon.png';
import { Link } from 'react-router-dom';
import report from '../../../test/weekreport';

const data = report.data;

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

    renderMention = (mention: string) => {
        let names = mention.split("@");
        console.log(names)
        let nameList: JSX.Element[] = [];
        names.map((item) => {
            if(item){
                nameList.push(
                    <Tag color="blue">@ {item}</Tag>
                )
            }
        })
        return nameList
    }

    renderTags = (tags: string) => {
        let tag = tags.split("#");
        let tagList: JSX.Element[] = [];
        tag.map((item) => {
            if(item){
                tagList.push(
                    <Tag color="volcano"># {item}</Tag>
                )
            }
        })
        return tagList
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
                                <Link to={`/Work/ReportList`}>
                                    <Button className="report-btn-other">随便看看</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                    <Divider dashed className="divider-dashed" />
                    <div className="report-content">
                        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                        <div className="mention">
                            {this.renderMention(data.mention)}
                            {this.renderTags(data.tags)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeekReport;