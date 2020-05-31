import React from 'react';
import discussdetail from '../../../test/discussdetail';
import { Badge, Tabs } from 'antd';
import DiscussPublic from './DiscussPublic';
import DiscussProject from './DiscussProject';
import Panel from '../../public/AdminPanel';
import maskImg from '../../../assets/twtlogo_tilt.svg';

const maskStyle = {
    backgroundImage: `url(${maskImg})`,
    backgroundSize: "30%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

const { TabPane } = Tabs;

const detail = discussdetail.data;

export interface Props {

}

export interface State {

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


class DiscussDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {


        };
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
            <div  style={maskStyle}>
                <Panel />
                <div className="work-title">讨论区管理</div>
                <p className="discuss-badges">
                    {this.statusPoint(1, true)}
                </p>
                <Tabs defaultActiveKey="1" className="workspace-container">
                    <TabPane tab="公共区" key="1" className="workspace-public">
                        <DiscussPublic team={this.teamMention()} />
                    </TabPane>
                    <TabPane tab="项目管理" key="2" className="workspace-public">
                        <DiscussProject />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default DiscussDetail;