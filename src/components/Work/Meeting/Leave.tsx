import React, { Component } from 'react';
import { Checkbox, Row, Col, Form, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';

export interface Props {

}

export interface State {

}

class Leave extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    handelReasonChange(e: any) {
        console.log('checked = ', e);
    }

    handelExplainChange(e: any) {
        console.log('explain = ', e);
    }

    render() {
        return (
            <div>
                <div className="work-title">请假</div>
                <div className="leave-card card-shadow">
                    <Form>
                        <p>请假理由</p>
                        <Form.Item>
                            <Checkbox.Group className="leave-card-reason" onChange={this.handelReasonChange}>
                                <Row>
                                    <Col span={6}>
                                        <Checkbox value="A">身体原因</Checkbox>
                                    </Col>
                                    <Col span={6}>
                                        <Checkbox value="B">学业原因</Checkbox>
                                    </Col>
                                    <Col span={6}>
                                        <Checkbox value="C">时间冲突</Checkbox>
                                    </Col>
                                    <Col span={6}>
                                        <Checkbox value="D">其他</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                        <p>具体说明</p>
                        <Form.Item>
                            <TextArea className="leave-card-explain" rows={8} onChange={this.handelExplainChange} />
                        </Form.Item>
                        <div className="leave-card-btns">
                            <Link to={`/Work/Meeting?id=${0}`}>
                                <Button className="leave-card-back">返回</Button>
                            </Link>
                            <Button className="leave-card-commit">提交</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Leave;