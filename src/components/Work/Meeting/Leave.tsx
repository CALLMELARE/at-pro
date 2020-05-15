import React, { Component } from 'react';

export interface Props {

}

export interface State {

}

class Leave extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="work-title">请假</div>
                <div className="leave-card card-shadow">
                    <p>请假理由</p>
                    <p>具体说明</p>
                </div>
            </div>
        );
    }
}

export default Leave;