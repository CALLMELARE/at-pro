import React from 'react';
import { Select, message, Form, Row, Col, Input, Radio, Button, DatePicker } from 'antd';
import member from '../../../test/members';

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export interface Props {

}

export interface State {

}

class DiscussProject extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        message.error("保存失败，请检查网络")
    };

    onChange(value: any, dateString: any) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk(value: any) {
        console.log('onOk: ', value);
    }

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
                onFinish={this.onFinish} style={{ width: "100%", padding: "1rem" }}
                initialValues={{
                }}
            >
                <Row>
                    <Col span={18}>
                        <Form.Item name="missionTitle" label="项目名称">
                            <Input placeholder="请输入项目名称" />
                        </Form.Item>
                        <Form.Item name="missionStartTime" label="开始时间">
                            <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                        </Form.Item>
                        <Form.Item name="missionEndTime" label="截止时间">
                            <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                        </Form.Item>
                        <Form.Item name="missionMember" label="管理成员">
                            <Select mode="multiple" placeholder="选择项目成员" allowClear={true}>
                                {this.renderReceiver()}
                            </Select>
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

export default DiscussProject;