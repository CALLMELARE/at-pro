import React, { Component } from 'react';
import { Col, Input, Button, Form } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

interface Props {

}

class Sign extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            signState: "notSigned"
        }
    }
    renderContent = (state: string) => {
        switch (state) {
            case "notSigned":
                return (<div className="sign-card card-shadow">
                    <Col span={12} offset={6}>
                        <p className="sign-card-t1">休想蒙混过关，快快交出密码</p>
                        <Form>
                            <Input.Password className="sign-card-psw" placeholder="在此输入秘钥……" />
                            <div className="sign-card-btns">
                                <Button className="sign-card-btn card-shadow">确定</Button>
                            </div>
                        </Form>
                        <p className="sign-card-t2">按Enter键结束输入哦</p>
                    </Col>
                </div>)
                break;
            case "signFailed":
                return (
                    <Col span={24}>
                        <div className="sign-card-failed card-shadow">
                            <Col span={12} offset={6}>
                                <CloseCircleOutlined className="sign-card-icon" style={{ fontSize: "7rem", color: "#ffffff" }} />
                                <p>ERROR</p>
                                <p>互联网并非法外之地！请君自重</p>
                                <div onClick={this.backToSign.bind(this)} className="sign-card-back">返回</div>
                            </Col>
                        </div>
                    </Col>
                );
                break;
            case "signSucceed":
                return (
                    <Col span={24}>
                        <div className="sign-card-succeed card-shadow">
                            <Col span={12} offset={6}>
                                <CheckCircleOutlined className="sign-card-icon" style={{ fontSize: "7rem", color: "#ffffff" }} />
                                <p>BINGO</p>
                                <p>签到成功</p>
                                <h4>签到时间：2020-05-02 20:32</h4>
                                <div onClick={this.backToSign.bind(this)} className="sign-card-back">返回</div>
                            </Col>
                        </div>
                    </Col>
                );
                break;
        }
    }

    backToSign = () => {
        this.setState({
            signState: "notSigned"
        })
    }

    render() {
        return (
            <div>
                <div className="work-title">签到</div>
                {this.renderContent(this.state.signState)}
            </div>
        )
    }
}

export default Sign
