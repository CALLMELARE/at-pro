import React, { Component } from 'react';
import { Form, Input, Button, Card, Modal } from 'antd';
import { Layout, Alert } from 'antd';
import twtlogo from '../assets/twtlogo_tilt.svg'
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import '../styles/login.scss';


const { Content, Footer } = Layout;

interface Props {
    collapsed: boolean,
}

class Login extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            success: true
        };
    }

    error() {
        Modal.error({
            title: <p><img src={twtlogo} height="30" width="30" />At</p>,
            content: '请检查用户名及密码是否正确',
            okText: "Ok",
        });
    }


    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        this.setState({ loading: true, })
        if (values.username === "test" && values.password === "123456") {
            sessionStorage.setItem("isLogin", "1");
            this.setState({ loading: false, })
            this.props.history.push("/")
        } else {
            this.setState({ success: false })
        }
    };


    render() {
        return (
            <Layout className="App">
                <Content className="login-page">
                    {this.state.success ? null : this.error()}
                    <Card className="login-card">
                        <h2>登录</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '用户名不能为空!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '密码不能为空!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登 录{this.state.loading ? <LoadingOutlined /> : null}</Button>
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