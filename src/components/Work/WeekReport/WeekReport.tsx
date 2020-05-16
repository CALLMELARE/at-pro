import React, { Component } from 'react';

export interface Props {

}

export interface State {

}

class WeekReport extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="work-title">周报</div>
            </div>
        );
    }
}

export default WeekReport;