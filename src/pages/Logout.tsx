import { Result, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import React, { Component } from 'react';

class Logout extends Component {

    render() {
        sessionStorage.clear();
        return (
            <Result
                icon={<CheckCircleOutlined />}
                title="你已成功登出"
                status={"success"}
                extra={<Button type="primary" href="/">返回</Button>}
            />
        )
    }
}

export default Logout