import { Result, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import fetchApi from '../api/callApi';
import { getLogout } from '../api/OAuth';
import icon from '../assets/twtlogo_tilt.svg';
import '../styles/login.scss';

class Logout extends Component {

    componentDidMount = () => {
        const { apiPath, request } = getLogout();
        fetchApi(apiPath, request)
            .then(res => res.json())
            .then(data => {

            })
    }

    render() {
        sessionStorage.clear();
        return (
            <div className="ant-layout App">
                <div className="logout-card">
                    <p>客官慢走，欢迎下次光临</p>
                    <span>See you next time</span>
                    <a href="/at-pro/">
                        <img src={icon} alt="logo" width={70} height={70} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Logout