import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import { Mentions } from 'antd';
import maskImg from '../../../assets/twtlogo_tilt_grey.svg';

const { TextArea } = Input;
const { Option } = Mentions;

export interface Props {

}

export interface State {
    randomKey: string,
    random: boolean
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};

const tailLayout = {
    wrapperCol: { offset: 16 },
};

const maskStyle = {
    backgroundImage: `url(${maskImg})`,
    backgroundSize: "40%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right"
}

class NewMeeting extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            randomKey: "",
            random: false
        };
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    startDateOnChange(date: any, dateString: any) {
        console.log(date, dateString);
    }

    startTimeOnChange(time: any, timeString: any) {
        console.log(time, timeString);
    }

    memberOnChange(value: any) {
        console.log('Change:', value);
    }

    memberOnSelect(option: any) {
        console.log('select', option);
    }

    renderMemberList = () => {
        let list: JSX.Element[] = [];
        for (let i = 1; i < 10; i++) {
            list.push(<Option value={`${1}`}>友人{i}</Option>)
        }
        return list;
    }

    randomSerectKey = () => {
        var pasArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var password = '';
        var pasArrLen = pasArr.length;
        for (var i = 0; i < 8; i++) {
            var x = Math.floor(Math.random() * pasArrLen);
            password += pasArr[x];
        }
        this.setState({
            randomKey: password,
            random: true
        })
    }

    resetSerectKey = () => {
        this.setState({
            random: false
        })
    }

    render() {
        return (
            <div>
                <div className="work-title">发起会议</div>
                <div className="newmeeting-form" style={maskStyle}>
                    <Form
                        {...layout}
                        name="NewMeeting"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="会议名称"
                            name="name"
                            rules={[{ required: true, message: '请输入会议名称' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="会议开始日期"
                            name="startdate"
                            rules={[{ required: true, message: '请输入会议开始日期' }]}
                        >
                            <DatePicker onChange={this.startDateOnChange} />
                        </Form.Item>

                        <Form.Item
                            label="会议开始时间"
                            name="starttime"
                            rules={[{ required: true, message: '请输入会议开始时间' }]}
                        >
                            <TimePicker onChange={this.startTimeOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </Form.Item>

                        <Form.Item
                            label="会议结束日期"
                            name="enddate"
                            rules={[{ required: true, message: '请输入会议结束日期' }]}
                        >
                            <DatePicker onChange={this.startDateOnChange} />
                        </Form.Item>

                        <Form.Item
                            label="会议结束时间"
                            name="endtime"
                            rules={[{ required: true, message: '请输入会议结束时间' }]}
                        >
                            <TimePicker onChange={this.startTimeOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </Form.Item>

                        <Form.Item
                            label="会议秘钥"
                            name="mettingMember"
                            rules={[{ required: true, message: '请输入8位会议秘钥' }]}
                        >
                            {this.state.random ?
                                <Input
                                    placeholder="8位字符串(区分大小写)"
                                    value={`${this.state.randomKey}`}
                                    disabled={true}
                                /> :
                                <Input
                                    placeholder="8位字符串（区分大小写）"
                                />
                            }
                            <Button className="random-key" onClick={this.randomSerectKey.bind(this)}>随机生成</Button>
                            <Button className="random-key" onClick={this.resetSerectKey.bind(this)}>重置秘钥</Button>
                        </Form.Item>

                        <Form.Item
                            label="添加成员"
                            name="mettingMember"
                            rules={[{ required: true, message: '请添加与会成员' }]}
                        >
                            <Mentions
                                onChange={this.memberOnChange}
                                onSelect={this.memberOnSelect}
                                placeholder="使用 @ 快速选择成员"
                            >
                                {this.renderMemberList()}
                            </Mentions>
                        </Form.Item>

                        <Form.Item
                            label="会议内容"
                            name="content"
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">发布</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default NewMeeting;