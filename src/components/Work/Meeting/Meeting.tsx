import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export interface Props {

}

export interface State {

}

class Meeting extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="work-title">待办会议</div>
                <div className="meeting-card card-shadow">
                    <p className="meeting-card-title"> 关于组建室级足球队的大会</p>
                    <p className="meeting-card-time">会议时间：2020-07-08 下午14:20</p>
                    <div className="meeting-card-detail">
                        <p>发起人：于谋华</p>
                        <p>参与人员： 全体工作室成员</p>
                        <p>主要内容： 如会议名所示</p>
                        <p>地点： 天外天工作室</p>
                    </div>
                    <p className="meeting-card-desc">会议要求：无</p>
                    <div className="meeting-card-btns">
                        <Link to={`/Work/Sign?id=${0}`}>
                            <Button className="meeting-card-btn-sign card-shadow">签到</Button>
                        </Link>
                        <Link to={`/Work/Leave?id=${0}`}>
                            <Button className="meeting-card-btn-leave card-shadow">请假</Button>
                        </Link>
                    </div>
                </div>
            </div >
        );
    }
}

export default Meeting;