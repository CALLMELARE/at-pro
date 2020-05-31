import React, { Component } from 'react';
import { Form, Input, Button, Card, Modal } from 'antd';
import { Layout, Alert, Divider } from 'antd';
import twtlogo from '../assets/twtlogo_tilt.svg';
import revtwtlogo from '../assets/twtlogo_tilt_rev.svg';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import '../styles/login.scss';
import { getLogin } from '../api/OAuth';
import fetchApi from '../api/callApi';
import { panelCtrl, bypassLogin } from '../debug/debug';
import { org, orgInShort } from '../settings/settings';

const { Content, Footer } = Layout;

const type = panelCtrl();
const loginBypass = bypassLogin();
// 是否为超级管理员

interface Props {
}

class Login extends Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
        };
    }

    error() {
        Modal.error({
            title: <p><img src={twtlogo} height="30" width="30" />At</p>,
            content: '请检查IPA账号及密码是否正确',
            okText: "Ok",
        });
    }

    onFinish = (values: any) => {
        // console.log('Received values of form: ', values);
        if (loginBypass === true) {
            sessionStorage.setItem("isLogin", "1");
            sessionStorage.setItem("username", "开发者");
            this.setState({ loading: false, })
            if (values.username === "admin" && values.password === "twtstudio") {
                sessionStorage.setItem("admin-panel", "true");
                window.location.href = "/at-pro/";
            } else if (values.username === "user" && values.password === "twtstudio") {
                sessionStorage.setItem("admin-panel", "false");
                sessionStorage.setItem("auth", "1")
                window.location.href = "/at-pro/";
            } else if (values.username === "leader" && values.password === "twtstudio") {
                sessionStorage.setItem("admin-panel", "false");
                sessionStorage.setItem("auth", "2")
                window.location.href = "/at-pro/";
            } else {
                this.error()
            }
        }
        this.setState({ loading: true, });
        const { apiPath, request } = getLogin(values.username, values.password);
        fetchApi(apiPath, request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let loginData = data.data;
                if (data.message === "登录成功") {
                    sessionStorage.setItem("isLogin", "1");
                    sessionStorage.setItem("username", loginData.name);
                    localStorage.setItem("token", loginData.token);
                    sessionStorage.setItem("auth", loginData.auth)
                    this.setState({ loading: false, })
                    if (type) {
                        sessionStorage.setItem("admin-panel", "true");
                        window.location.href = "/at-pro/";
                    } else {
                        sessionStorage.setItem("admin-panel", "false");
                        window.location.href = "/at-pro/";
                    }
                } else {
                    this.error()
                }
            })
    };

    render() {

        return (
            <Layout className="App">
                <Content className="login-page">
                    <Card className="login-card">
                        <h2>登录</h2>
                        {loginBypass ? <div style={{ textAlign: "center" }}>开发者模式已启用</div> : null}
                        <Divider dashed className="divider-dashed" />
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'IPA账号不能为空!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="IPA账号" />
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
                            <div className="login-buttons">
                                <div>
                                    <p>使用{orgInShort()}账号登录</p>
                                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                                </div>
                                <Button type="primary" className="login-with-twt-button"><img src={revtwtlogo} height="43" width="43" /></Button>
                            </div>
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