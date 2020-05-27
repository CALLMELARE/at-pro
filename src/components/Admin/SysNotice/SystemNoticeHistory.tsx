import React, { Component } from 'react';
import Panel from '../../public/AdminPanel';
import sysnoticehistory from '../../../test/sysnoticehistory';
import { Row, Col, Form, Radio, Button } from 'antd';

export interface Props {

}

export interface State {
    value: number
}

class SystemNoticeHistory extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: 1
        };
    }


    onRadioChange = (e: any) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        let data = sysnoticehistory.data;
        return (
            <div className="system-notice-history">
                <Panel />
                <div className="admin-title">历史发布</div>
                <div className="system-notice-history-card card-shadow">
                    <Row>
                        <Col span={16}>
                            <p className="system-notice-history-content">
                                {data.message}
                            </p>
                        </Col>
                        <Col span={8}>
                            <Form>
                                <Form.Item className="switch-target" name="target">
                                    <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
                                        <Radio value={1}>全体成员</Radio>
                                        <Radio value={2}>全体组长</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item className="post">
                                    <Button htmlType="submit">发布</Button>
                                    <Button danger>删除</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SystemNoticeHistory;