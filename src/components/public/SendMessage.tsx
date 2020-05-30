import React, { Component } from 'react';
import { Tabs, Tooltip, Modal, Button, Mentions, Input, Form, Select } from 'antd';
import {
    RocketOutlined,
    MailOutlined,
    CloseOutlined
} from '@ant-design/icons';
import maskImg from '../../assets/POST-bg.png';
import member from '../../test/members';
import '../../styles/message.scss';
import PictureWall from './PicturesWall';

interface Props {
    btncls: string,
    content: JSX.Element | string,
    target?: number[]
}

interface State {
    visible: boolean,
    post: boolean,
    prefix: string
}

const maskStyle = {
    backgroundColor: "#f9f9f9",
    backgroundImage: `url(${maskImg})`,
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

const { Option } = Select;
const { TextArea } = Input;

class SendMessage extends Component<Props, State> {
    constructor(props: Props) {
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

    renderReceiver = () => {
        let receiveList: JSX.Element[] = [];
        let data = member.data;
        data.map((item) => {
            receiveList.push(
                <Option value={item.memId}>{item.name}</Option>
            )
        })
        return receiveList
    }

    render() {
        return (
            <span>
                <Tooltip placement="bottom" title={"私信"}>
                    <button onClick={this.showModal} className={this.props.btncls}>{this.props.content}</button>
                </Tooltip>
                <Modal
                    className="send-message-modal"
                    maskStyle={maskStyle}
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
                                {this.renderReceiver()}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <TextArea rows={12} onChange={this.onChange} autoFocus={false} />
                        </Form.Item>
                        <Form.Item>
                            <PictureWall></PictureWall>
                        </Form.Item>
                    </Form>
                </Modal>
            </span >
        )
    }
}

export default SendMessage