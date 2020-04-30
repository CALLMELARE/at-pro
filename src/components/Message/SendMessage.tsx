import React, { Component } from 'react';
import { Tabs, Tooltip, Modal, Button, Mentions, Input, Form, Select } from 'antd';
import {
    RocketOutlined,
    MailOutlined,
    CloseOutlined
} from '@ant-design/icons';

import '../../styles/message.scss';

interface propType {
    btncls: string,
    content: JSX.Element | string,
    target: []
}

const { Option } = Mentions;
const { TextArea } = Input;

class SendMessage extends Component<any, any> {
    constructor(props: propType) {
        super(props)
        this.state = {
            post: false,
            visible: false,
            prefix: '@',
        }
    }

    onChange = (e: any) => {
        console.log(e)
    };

    onSearch = (_: any, prefix: string) => {
        this.setState({ prefix });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            post: false,
            visible: false,
        });
    };

    handleOk = () => {
        this.setState({
            post: true,
        })
    };

    modalHeader = (text: string) => (
        <div>
            <div className="send-message-title">{text}</div>
        </div>
    )

    render() {
        return (
            <span>
                <Tooltip placement="bottom" title={"私信"}>
                    <button onClick={this.showModal} className={this.props.btncls}>{this.props.content}</button>
                </Tooltip>
                <Modal
                    title={this.modalHeader("发送私信")}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        null,
                        <Button className="send-message-btn" key="submit" type="primary" onClick={this.handleOk}>发送</Button>,
                    ]}
                >
                    <Form>
                        <Form.Item>
                            <Select mode="multiple" placeholder="选择私信接收者" allowClear={true}>
                                <Option value="red">Red</Option>
                                <Option value="green">Green</Option>
                                <Option value="blue">Blue</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <TextArea rows={12} onChange={this.onChange} autoFocus={false} />
                        </Form.Item>
                    </Form>
                </Modal>
            </span >
        )
    }
}

export default SendMessage