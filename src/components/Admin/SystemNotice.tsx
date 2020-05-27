import React, { Component } from "react";
import Panel from '../public/AdminPanel';
import '../../styles/admin.scss';
import { Row, Col, Form, Input, Radio, Button } from "antd";
import sysnotice from '../../test/sysnotice';
const { TextArea } = Input;

export interface Props {

}

export interface State {
    value: number
}

class SystemNotice extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            value: 1
        };
    }
    hisPostRender = () => {
        let list: JSX.Element[] = [];
        sysnotice.data.map((item) => {
            list.push(
                <Row className="his-post-cotents" key={item.id}>
                    <Col className="his-post-cotent" span={2}>{item.id}</Col>
                    <Col className="his-post-cotent" span={6}>{item.post_time}</Col>
                    <Col className="his-post-cotent" span={4}>{item.auther}</Col>
                    <Col className="his-post-cotent" span={6}>{item.target}</Col>
                    <Col className="his-post-cotent" span={6}>{item.describe}</Col>
                </Row>
            )
        })
        return list
    }

    onRadioChange = (e: any) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <div className="system-notice">
                <Panel />
                <div className="admin-title">历史发布</div>
                <div className="his-post card-shadow">
                    <Row className="his-post-titles">
                        <Col className="his-post-title" span={2}></Col>
                        <Col className="his-post-title" span={6}>发布时间</Col>
                        <Col className="his-post-title" span={4}>发布人</Col>
                        <Col className="his-post-title" span={6}>发布对象</Col>
                        <Col className="his-post-title" span={6}>主要内容</Col>
                    </Row>
                    <div className="his-post-list">
                        {this.hisPostRender()}
                    </div>
                </div>
                <div className="admin-title">新建公告</div>
                <div className="new-post card-shadow">
                    <Form>
                        <Row>
                            <Col span={16}>
                                <Form.Item name="content">
                                    <TextArea rows={6} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item className="switch-target" name="target">
                                    <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
                                        <Radio value={1}>全体成员</Radio>
                                        <Radio value={2}>全体组长</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item className="post">
                                    <Button htmlType="submit">发布</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SystemNotice