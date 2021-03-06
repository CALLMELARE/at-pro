import React, { Component } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import testUserInfo from '../../test/userinfo';
import ResetPwd from './ResetPassword';
import userIcon from '../../assets/usericon.png';
import fetchApi from '../../api/callApi';
import { userinfo } from '../../api/Profile';
import '../../styles/profile.scss';
import Noti from '../public/Noti';
import { Button, Input, Form } from 'antd';

interface profileType {
    id: number,
    username: string,
    password: string,
    name: string,
    studentid: string,
    phone: string,
    email: string,
    team: string,
    auth: number
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

class Profile extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            imgMouseOver: false,
            textMouseOver: false
        }
    }

    getAuthName(authType: number) {
        if (authType === 0 || authType === 1 || authType === 2) {
            switch (authType) {
                case 0:
                    return "组员";
                    break;
                case 1:
                    return "组长";
                    break;
                case 2:
                    return "管理员";
                    break;
                default:
                    break;
            }
        }
    }

    getDate(time: string) {
        if (time) {
            return time.substr(0, 10);
        }
    }

    handleImgMouseOver = (e: any) => {
        e.preventDefault();
        this.setState({
            imgMouseOver: true
        })
    }

    handleImgMouseLeave = (e: any) => {
        e.preventDefault();
        this.setState({
            imgMouseOver: false
        })
    }

    handleTextMouseOver = (e: any) => {
        e.preventDefault();
        this.setState({
            textMouseOver: true
        })
    }

    handleTextMouseLeave = (e: any) => {
        e.preventDefault();
        this.setState({
            textMouseOver: false
        })
    }

    faviconContainer = (info: profileType) => {
        return (
            <div className="profile-card-left" onMouseOver={this.handleImgMouseOver.bind(this)} onMouseLeave={this.handleImgMouseLeave.bind(this)}>
                <div className="profile-card-img">
                    <img className="user-icon-upper" src={userIcon} />
                </div>
            </div>
        )
    }

    textList = (info: profileType) => {
        return (
            this.state.imgMouseOver ?
                <div className="profile-card-right">
                    <span className="profile-card-info">账号：<span>{info.username}</span></span>
                    <span className="profile-card-info">姓名：<span>{info.name + "  " + info.studentid}</span></span>
                    <span className="profile-card-info">组别：<span>{info.team + "  " + this.getAuthName(info.auth)}</span></span>
                    <span className="profile-card-info">邮箱：<span>{info.email}</span></span>
                </div> :
                <div className="profile-card-right-text" onMouseOver={this.handleTextMouseOver.bind(this)} onMouseLeave={this.handleTextMouseLeave.bind(this)}>
                    {this.state.textMouseOver ?
                        <div>
                            <Form {...layout}>
                                <Form.Item label="选择头像">
                                    <Button>+</Button>
                                </Form.Item>
                                <Form.Item label="更改签名">
                                    <Input></Input>
                                </Form.Item>
                            </Form>
                        </div>
                        : "有些人生命里出现一次就够了，遇到是我的幸运。"}
                </div>
        )
    }

    componentDidMount = () => {
        const { apiPath, request } = userinfo();
        fetchApi(apiPath, request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {
        let userInfo = testUserInfo;
        return (
            <div>
                <div className="ant-descriptions-title">个人信息</div>
                <div className="profile-card card-shadow">
                    {this.faviconContainer(testUserInfo)}
                    {this.textList(testUserInfo)}
                    <div className="profile-help">
                        <Noti
                            title="帮助"
                            type="help"
                            content="如果信息有误或者有需改变的信息，请及时联系组长或者站内管理员"
                            btn={<QuestionCircleOutlined />}
                        />
                    </div>
                </div>

                <div className="ant-descriptions-title">修改密码</div>
                <ResetPwd />
            </div>
        )
    }
}

export default Profile