import React, { Component } from 'react';
import { Badge, Tabs } from 'antd';
const { TabPane } = Tabs;


export interface Props {

}

export interface State {
    isEditing: boolean
}

class WorkSpace extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isEditing: false
        };
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

                    </TabPane>
                    <TabPane tab="我的历史提交" key="2" className="workspace-hiscommit">

                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default WorkSpace;