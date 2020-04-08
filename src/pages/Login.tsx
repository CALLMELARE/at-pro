import React, { Component } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Layout } from 'antd';
import twtlogo from '../assets/twtlogo_tilt.svg'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../styles/login.scss';

const { Content, Footer } = Layout;

interface Props {
    collapsed: boolean,
}

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

class Login extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <Layout className="App">
                <Content className="login-page">
                    <Card className="login-card">
                        <h2>登录</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>

                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
                <Footer>
                    <img src={twtlogo} height="50" width="50" />
                </Footer>
            </Layout>
        )
    }
}

export default Login