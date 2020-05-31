import React from 'react';
import { Form, Row, Button, message, Input, Col, Radio, Select } from 'antd';
import member from '../../../test/members';
const { Option } = Select;

export interface Props {

}

export interface State {

}

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

class WorkSpaceManage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        message.error("保存失败，请检查网络")
    };

    renderReceiver = () => {
        let receiveList: JSX.Element[] = [];
        let data = member.data;
        data.map((item) => {
            receiveList.push(
                <Option value={item.name}>{item.name}</Option>
            )
        })
        return receiveList
    }

    render() {
        return (
            <Form
                {...layout}
                onFinish={this.onFinish} style={{ width: "100%" }}
                initialValues={{
                }}
            >
                <Row>
                    <Col span={18}>
                        <Form.Item name="missionContent" label="任务详情">
                            <Input.TextArea rows={6} />
                        </Form.Item>
                        <Form.Item name="missionMember" label="添加成员">
                            <Select mode="multiple" placeholder="选择私信接收者" allowClear={true}>
                                {this.renderReceiver()}
                            </Select>
                        </Form.Item>
                        <Form.Item name="missionMention" label="发出提醒">
                            <Radio.Group name="radiogroup" defaultValue={0}>
                                <Radio value={0}>不发送</Radio>
                                <Radio value={1}>发送</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="submit">
                    <div className="workspace-submit">
                        <Button htmlType="submit">保存</Button>
                    </div>
                </Form.Item>
            </Form>
        );
    }
}

export default WorkSpaceManage;