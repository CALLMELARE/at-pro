import React, { Component } from "react";
import Panel from '../../public/AdminPanel';

export interface Props {

}

export interface State {

}

class DeletedUser extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            <Panel />
            <div className="admin-title">成员管理</div>
            </div>
        );
    }
}

export default DeletedUser;