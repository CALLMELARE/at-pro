import React from 'react';

export interface Props {

}

export interface State {

}

class Meeting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Meeting
            </div>
        );
    }
}

export default Meeting;