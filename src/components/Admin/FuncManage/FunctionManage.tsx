import React, { Component } from "react";
import Panel from '../../public/AdminPanel';
import Header from './FunctionHeader';


export interface Props {

}

export interface State {

}

class FunctionManage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="func-manage">
                <Panel />
                <Header />
            </div>
        );
    }
}

export default FunctionManage;