import { Form, Input, Button, message, Popconfirm } from 'antd';
import React, { Component } from 'react';
import { resetPassword } from '../../api/OAuth';

interface formType {
    current: string
}

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

const validateMessages = {
    required: "此处不能为空",
};

class ResetPwd extends Component<any, any> {
    formRef = React.createRef();

    onFinish = (values: any) => {
        // console.log(values.newpw1);
        // console.log(values.newpw2);
        if (values.newpw1 === values.newpw2) {
            // 在这里发出修改请求
            message.success("修改成功")
        } else {
            message.error("两次密码输入不一致")
        }
    };

    render() {
        return (
            <div className="reset-pwd">
                <Form {...layout} className="reset-pwd-form card-shadow" name="control-ref" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item name="newpw1" label="新密码" rules={[{ required: true }]}>
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item name="newpw2" label="确认密码" rules={[{ required: true }]}>
                        <Input allowClear />
                    </Form.Item>
                    <p className="reset-pwd-tip">为确保信息安全，请养成良好的密码使用习惯，不得使用弱密码，尽量避免同一密码多处使用。 请设置最少 8 位的密码，建议包含大、小写字母、数字符号中的至少三种</p>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">修改</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default ResetPwd