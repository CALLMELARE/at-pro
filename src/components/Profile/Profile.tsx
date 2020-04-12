import React from 'react';
import { Descriptions, Card } from 'antd';
import testUserInfo from '../../test/userinfo';
import ResetPwd from './ResetPassword';
import '../../styles/profile.scss';
interface profileType {
    id: number,
    username: string,
    password: string,
    name: string,
    studentid: number,
    phone: number,
    email: string,
    team: string,
    auth: number
}

class Profile extends React.PureComponent {

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

    render() {
        let userInfo = testUserInfo;
        return (
            <div>
                <Descriptions
                    title="个人信息"
                    className=""
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="用户名">{userInfo.username}</Descriptions.Item>
                    <Descriptions.Item label="组别">{userInfo.team}</Descriptions.Item>
                    <Descriptions.Item label="身份">{this.getAuthName(userInfo.auth)}</Descriptions.Item>
                    <Descriptions.Item label="真实姓名">{userInfo.name}</Descriptions.Item>
                    <Descriptions.Item label="学工号">{userInfo.studentid}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{userInfo.phone}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{userInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="入职时间">{this.getDate(userInfo.created_at)}</Descriptions.Item>
                    <Descriptions.Item label="档案更新于">{this.getDate(userInfo.updated_at)}</Descriptions.Item>
                </Descriptions>
                <div className="ant-descriptions-title">修改密码</div>
                <ResetPwd />
            </div>
        )
    }
}

export default Profile