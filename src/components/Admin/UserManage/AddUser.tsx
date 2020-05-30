import React, { Component } from "react";
import Panel from '../../public/AdminPanel';
import { Row, Col, Form, Input, Select, Button, message } from "antd";
import {
    AndroidOutlined, AppleOutlined, ChromeOutlined, CodeOutlined, BulbOutlined, FormatPainterOutlined
} from '@ant-design/icons';
const { Option } = Select;

export interface Props {

}

export interface State {
    valiId: "" | "success" | "error" | "warning" | "validating" | undefined,
    valiIdCard: "" | "success" | "error" | "warning" | "validating" | undefined,
    valiEmail: "" | "success" | "error" | "warning" | "validating" | undefined,
    valiPhone: "" | "success" | "error" | "warning" | "validating" | undefined,
}

class AddUser extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            valiId: undefined,
            valiIdCard: undefined,
            valiEmail: undefined,
            valiPhone: undefined
        };
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        message.error("添加失败，请检查网络")
    };

    handlePhoneChange = (e: any) => {
        const { value } = e.target;
        console.log(value);
        const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (reg.test(value)) {
            this.setState({
                valiPhone: "success"
            })
        } else {
            this.setState({
                valiPhone: "warning"
            })
        }
    }

    handleEmailChange = (e: any) => {
        const { value } = e.target;
        console.log(value);
        const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (reg.test(value)) {
            this.setState({
                valiEmail: "success"
            })
        } else {
            this.setState({
                valiEmail: "warning"
            })
        }
    }

    handleIdCardChange = (e: any) => {
        const { value } = e.target;
        console.log(value);
        const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
        if ((!isNaN(value) && reg.test(value))) {
            this.setState({
                valiIdCard: "success"
            })
        } else {
            this.setState({
                valiIdCard: "warning"
            })
        }
    }

    handleIdChange = (e: any) => {
        const { value } = e.target;
        console.log(value);
        const reg = /[0-9]{10}/;
        if ((!isNaN(value) && reg.test(value))) {
            this.setState({
                valiId: "success"
            })
        } else {
            this.setState({
                valiId: "warning"
            })
        }
    }

    render() {
        return (
            <div>
                <Panel />
                <div className="admin-title">成员管理</div>
                <div className="usermanage-add-card card-shadow">
                    <p className="sub-title">信息录入</p>
                    <Form
                        onFinish={this.onFinish}
                    >
                        <Row className="usermanage-add-items">
                            <Col span={12} className="usermanage-add-item">学号</Col>
                            <Col span={12} className="usermanage-add-item">校区</Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="id"
                                    rules={[{ required: true, message: '学号 不能为空' }]}
                                    hasFeedback
                                    validateStatus={this.state.valiId}
                                    help="学号 校验规则已启用"
                                >
                                    <Input
                                        onChange={this.handleIdChange}
                                        placeholder="请输入学号"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="campus"
                                    rules={[{ required: true, message: '校区 不能为空' }]}
                                >
                                    <Select
                                        placeholder="请选择校区"
                                    >
                                        <Option value={0}>北洋园校区</Option>
                                        <Option value={1}>卫津路校区</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">姓名</Col>
                            <Col span={12} className="usermanage-add-item">组别</Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: '姓名 不能为空' }]}
                                >
                                    <Input
                                        placeholder="请输入姓名"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="team"
                                    rules={[{ required: true, message: '组别 不能为空' }]}
                                >
                                    <Select
                                        placeholder="请选择组别"
                                    >
                                        <Option value={0}><AndroidOutlined /> Android</Option>
                                        <Option value={1}><AppleOutlined /> iOS</Option>
                                        <Option value={2}><BulbOutlined /> 产品</Option>
                                        <Option value={3}><CodeOutlined /> 程序</Option>
                                        <Option value={4}><ChromeOutlined /> 前端</Option>
                                        <Option value={5}><FormatPainterOutlined /> 设计</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">邮箱</Col>
                            <Col span={12} className="usermanage-add-item">身份</Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="email"
                                    hasFeedback
                                    rules={[{ required: true, message: '邮箱 不能为空' }]}
                                    validateStatus={this.state.valiEmail}
                                    help="邮箱 校验规则已启用"
                                >
                                    <Input
                                        onChange={this.handleEmailChange}
                                        placeholder="请输入邮箱"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="auth"
                                    rules={[{ required: true, message: '身份 不能为空' }]}
                                >
                                    <Select
                                        placeholder="请选择身份"
                                    >
                                        <Option value={0}>组员</Option>
                                        <Option value={1}>组长</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">身份证号</Col>
                            <Col span={12} className="usermanage-add-item">联系电话</Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="idcard"
                                    hasFeedback
                                    rules={[{ required: true, message: '身份证号 不能为空' }]}
                                    validateStatus={this.state.valiIdCard}
                                    help="身份证号 校验规则已启用"
                                >
                                    <Input
                                        onChange={this.handleIdCardChange}
                                        placeholder="请输入身份证号"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} className="usermanage-add-item">
                                <Form.Item
                                    name="phone"
                                    hasFeedback
                                    rules={[{ required: true, message: '联系电话 不能为空' }]}
                                    validateStatus={this.state.valiPhone}
                                    help="联系电话 校验规则已启用"
                                >
                                    <Input
                                        onChange={this.handlePhoneChange}
                                        placeholder="请输入联系电话"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24} className="usermanage-add-item">
                                <Form.Item >
                                    <Button htmlType="submit">添加</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddUser;