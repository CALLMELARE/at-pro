import React, { Component } from 'react';
import { Badge, Tabs, Row, Col } from 'antd';
import HeatMap from '../../Dashboard/Heatmap';
import WorkSpacePublic from './WorkSpacePublic';
import WorkSpaceManage from './WorkSpaceManage';
import discussdetail from '../../../test/discussdetail';
const { TabPane } = Tabs;
const detail = discussdetail.data;

export interface Props {

}

export interface State {
    isEditing: boolean
}

function getQueryVariable(variable: string) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

class WorkSpace extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    isHost = () => {
        let id = parseInt(getQueryVariable("id") as string);
        let ishost = false;
        detail.map((item) => {
            if (item.id === id) {
                ishost = item.ishost
            }
        })
        return ishost
    }

    teamMention = () => {
        let id = parseInt(getQueryVariable("id") as string);
        let team: string[] = [];
        detail.map((item) => {
            if (item.id === id) {
                team = item.teammention
            }
        })
        return team
    }

    statusPoint = (status: number, withText: boolean) => {
        switch (status) {
            case 1:
                return <Badge status="success" text={withText ? "进行中" : null} />
            case 2:
                return <Badge status="warning" text={withText ? "状态不明" : null} />
            case 3:
                return <Badge status="error" text={withText ? "已完结" : null} />
            case 4:
                return <Badge status="default" text={withText ? "未开始" : null} />
        }
    }

    render() {
        return (
            <div>
                <div className="work-title">工作讨论区</div>
                <p className="discuss-badges">
                    {this.statusPoint(1, true)}
                </p>
                <Tabs defaultActiveKey="1" className="workspace-container">
                    <TabPane tab="公共区" key="1" className="workspace-public">
                        <WorkSpacePublic type={this.isHost()} team={this.teamMention()} />
                    </TabPane>
                    <TabPane tab="历史提交" key="2" className="workspace-hiscommit">

                    </TabPane>
                    {this.isHost() ?
                        <TabPane tab="组建管理" key="3" className="workspace-manage">
                            <WorkSpaceManage />
                        </TabPane>
                        : null
                    }
                </Tabs>
            </div>
        );
    }
}

export default WorkSpace;