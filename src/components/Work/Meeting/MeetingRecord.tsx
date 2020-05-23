import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

const { TextArea } = Input;

export interface Props {

}

export interface State {

}

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 16 },
};

class MeetingRecord extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="meeting-record">
                <div className="work-title">会议记录</div>
                <div className="hismetting-card card-shadow">
                    <Form
                        {...layout}
                        name="NewMeeting"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="会议记录"
                            name="record"
                            rules={[{ required: true, message: '会议记录无法为空' }]}
                        >
                            <TextArea rows={6} />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default MeetingRecord;