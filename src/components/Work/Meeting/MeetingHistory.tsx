import React, { Component } from 'react';

export interface Props {

}

export interface State {

}

class MeetingHistory extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="work-title">签到</div>
            </div>
        );
    }
}

export default MeetingHistory;
