import React, { Component } from 'react';
import { Input } from 'antd';
const { Search } = Input;


export interface Props {

}

export interface State {
    status: number
}

class MeetingHistory extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            status: 1
        };
    }

    renderStatus = (status: number) => {
        switch (status) {
            case 1:
                return <span>
                    <span style={{ color: "#89C997", fontWeight: "bold" }}>已签到</span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>已请假</span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>未出勤</span>
                </span>
                break;
            case 2:
                return <span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>已签到</span>
                    <span style={{ color: "#F8B551", fontWeight: "bold" }}>已请假</span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>未出勤</span>
                </span>
                break;
            case 3:
                return <span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>已签到</span>
                    <span style={{ color: "#DCDCDC", fontWeight: "bold" }}>已请假</span>
                    <span style={{ color: "#EC6941", fontWeight: "bold" }}>未出勤</span>
                </span>
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="work-title">历史会议</div>
                <div className="hismetting-card card-shadow">
                    <div className="hismetting-search">
                        <Search
                            style={{ display: "none" }}
                            // 感觉没什么用，隐藏了
                            prefix={"会议名称 ："}
                            placeholder="input search text"
                            onSearch={(value: any) => console.log(value)}
                        />
                    </div>
                    <p className="hismetting-list"><span className="hismetting-list-title">会议时间：</span>2020年05月02号</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">会议地点：</span>天外天工作室（北洋园校区）</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">发起人：</span>张某某（3017005243）</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">主持人：</span>张某某（3017005243）</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">主要内容：</span>讨论有关工作室网址迁移的通知及注意事项</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">出勤比例：</span>39 / 50</p>
                    <p className="hismetting-list"><span className="hismetting-list-title">您的状态：</span>{this.renderStatus(this.state.status)}</p>
                </div>
            </div>
        );
    }
}

export default MeetingHistory;
