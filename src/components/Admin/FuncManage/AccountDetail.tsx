import React from 'react';
import Panel from '../../public/AdminPanel';
import Header from './FunctionHeader';
import userinfo from '../../../test/userinfo';
import icon from '../../../assets/usericon.png';
import {
    FormOutlined,
    SaveOutlined
} from '@ant-design/icons';
import { Row, Col, Input, Form, Button, message, Select } from 'antd';
const { Option } = Select;


export interface Props {

}

export interface State {
    edit: boolean
}

class AccountDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            edit: false
        };
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

    handleEdit = () => {
        let status = this.state.edit;
        this.setState({
            edit: !status
        })
    }

    handleReset = () => {
        message.success(`用户 ${userinfo.username} 密码已重置为身份证后六位`)
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        let status = this.state.edit;
        this.setState({
            edit: !status
        })
        message.error("修改失败，请检查网络")
    };

    render() {
        return (
            <div>
                <Panel />
                <div className="admin-title">账户信息</div>
                <div className="accountdetail-card card-shadow">
                    <div className="accountdetail-icon">
                        <img width={150} height={150} src={icon} alt="" />
                    </div>
                    <Form
                        onFinish={this.onFinish}
                        initialValues={{
                            username: userinfo.username,
                            campus: "北洋园校区",
                            name: userinfo.name,
                            team: userinfo.team,
                            email: userinfo.email,
                            auth: userinfo.auth,
                            phone: userinfo.phone,
                            idcard: 987654321234567898
                        }}
                    >
                        <div className="tools">
                            {this.state.edit ?
                                <Button name="submit" htmlType="submit" >
                                    <SaveOutlined style={{ fontSize: "1.5rem" }} />
                                </Button> :
                                null
                            }
                            {this.state.edit ? null :
                                <Button name="edit" onClick={this.handleEdit.bind(this)}>
                                    <FormOutlined style={{ fontSize: "1.5rem" }} />
                                </Button>
                            }
                        </div>

                        <Row className="accountdetail-content">
                            <Col span={12}>
                                <span className="accountdetail-text1">账号：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="username">
                                            <Input
                                                placeholder="请输入账号"
                                            />
                                        </Form.Item> : userinfo.username
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">校区：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="campus">
                                            <Input
                                                placeholder="请输入校区"
                                            />
                                        </Form.Item> : "北洋园校区"
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">姓名：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="name">
                                            <Input
                                                placeholder="请输入姓名"
                                            />
                                        </Form.Item> : userinfo.name
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">组别：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="team">
                                            <Input
                                                placeholder="请输入组别"
                                            />
                                        </Form.Item> : userinfo.team
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">邮箱：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="email">
                                            <Input
                                                placeholder="请输入邮箱"
                                            />
                                        </Form.Item> : userinfo.email
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">身份：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="auth">
                                            <Select>
                                                <Option value={0}>组员</Option>
                                                <Option value={1}>组长</Option>
                                            </Select>
                                        </Form.Item> : this.getAuthName(userinfo.auth)
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">身份证号：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="idcard">
                                            <Input
                                                placeholder="请输入身份证号"
                                            />
                                        </Form.Item> : 987654321234567898
                                    }
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">密码：</span>
                                <span className="accountdetail-text2">
                                    <div className="reset" onClick={this.handleReset}>重置密码</div>
                                </span>
                            </Col>
                            <Col span={12}>
                                <span className="accountdetail-text1">联系电话：</span>
                                <span className="accountdetail-text2">
                                    {this.state.edit ?
                                        <Form.Item name="phone">
                                            <Input
                                                placeholder="请输入联系电话"
                                            />
                                        </Form.Item> : userinfo.phone
                                    }
                                </span>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div >
        );
    }
}

export default AccountDetail;