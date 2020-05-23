import React, { Component } from 'react';

export interface Props {

}

export interface State {

}

class GroupAttending extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <div className="work-title">组员出勤情况</div>
            </div>
        );
    }
}

export default GroupAttending;