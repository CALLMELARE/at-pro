import React, { Component } from 'react';
import { Collapse, Dropdown, Button, Menu, DatePicker } from 'antd';
import { DownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import reportlist from '../../../test/reportlist';
import { Link } from 'react-router-dom';
const { Panel } = Collapse;

function getWeek(date: { getFullYear: () => number; getDay: () => any; getTime: () => number; }) {
    var date2 = new Date(date.getFullYear(), 0, 1);
    var day1 = date.getDay();
    if (day1 == 0) day1 = 7;
    var day2 = date2.getDay();
    if (day2 == 0) day2 = 7;
    const d = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000);
    return Math.ceil(d / 7) + 1;
}

function getYear(date: Date) {
    return date.getFullYear();
}



export interface Props {

}

export interface State {

}

function onChange(date: any) {
    let selectWeek = date.format("w")
    console.log(selectWeek);
}

function handleMenuClick(e: any) {
    console.log('click', e);
}

class WeekReportList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    teamFilter = (team: number) => {
        let data = reportlist.data;
        let list: JSX.Element[] = [];
        data.map((item) => {
            if (item.team === team) {
                list.push(
                    <Link to={`/`}>
                        <div className="reportlist-item" key={item.id}>
                            <span className="reportlist-item-name">{item.name}</span>
                            <span className="reportlist-item-status">{item.finish ? <span className="yes">已提交</span> : <span className="no">未提交</span>}</span>
                        </div>
                    </Link>
                )
            }
        })
        return list;
    }

    weekMenu = () => {
        let i = 1;
        let list: JSX.Element[] = [];
        return (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key={`${i}`} >{i}</Menu.Item>
            </Menu>
        )
    }

    render() {
        let now = new Date();
        return (
            <div>
                <div className="work-title">相关周报</div>
                <div className="reportlist-card">
                    <div className="reportlist-select-header">
                        <Dropdown overlay={this.weekMenu()}>
                            <Button>
                                第{getYear(now)}{getWeek(now)}期周报 <DownOutlined />
                            </Button>
                        </Dropdown>
                        <DatePicker onChange={onChange} picker="week" />
                    </div>
                    <Collapse>
                        <Panel header="前端组" key="1">
                            {this.teamFilter(1)}
                        </Panel>
                        <Panel header="程序组" key="2">
                            {this.teamFilter(2)}
                        </Panel>
                        <Panel header="产品组" key="3">
                            {this.teamFilter(3)}
                        </Panel>
                        <Panel header="设计组" key="4">
                            {this.teamFilter(4)}
                        </Panel>
                        <Panel header="移动组" key="5">
                            {this.teamFilter(5)}
                        </Panel>
                    </Collapse>
                    <Link to="/Work/Report" className="reportlist-back">
                        <Button >返回</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default WeekReportList;