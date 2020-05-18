import React, { Component } from 'react';

export interface Props {

}

export interface State {

}

class WeekReportList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="work-title">相关周报</div>
            </div>
        );
    }
}

export default WeekReportList;