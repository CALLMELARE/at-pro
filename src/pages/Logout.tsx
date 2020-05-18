import { Result, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import fetchApi from '../api/callApi';
import { getLogout } from '../api/OAuth';

class Logout extends Component {

    componentDidMount = () => {
        const {apiPath,request} =getLogout();
        fetchApi(apiPath,request)
        .then(res=>res.json())
        .then(data=>{
            
        })
    }

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