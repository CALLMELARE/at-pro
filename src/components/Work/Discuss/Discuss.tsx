import React, { Component } from 'react';
import { Badge } from 'antd';

export interface Props {

}

export interface State {

}

class Discuss extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    statusPoint = (status: number, withText: boolean) => {
        switch (status) {
            case 1:
                return <Badge status="success" text={withText ? "运行中" : null} />
            case 2:
                return <Badge status="warning" text={withText ? "状态不明" : null} />
            case 3:
                return <Badge status="error" text={withText ? "即将完结" : null} />
            case 4:
                return <Badge status="default" text={withText ? "未开始" : null} />

        }
    }

    render() {
        return (
            <div className="discuss">
                <div className="work-title">工作讨论区</div>
                <p className="discuss-badges">
                    {this.statusPoint(1, true)}
                    {this.statusPoint(2, true)}
                    {this.statusPoint(3, true)}
                    {this.statusPoint(4, true)}
                </p>
            </div>
        );
    }
}

export default Discuss;