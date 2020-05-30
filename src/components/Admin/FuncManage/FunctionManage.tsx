import React, { Component } from "react";
import Panel from '../../public/AdminPanel';
import Header from './FunctionHeader';
import maskImg from '../../../assets/twtlogo_tilt_rev.svg';


const bgStyle = {
    backgroundImage: `url(${maskImg})`,
    backgroundSize: "30%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

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
            <div className="func-manage" style={bgStyle}>
                <Panel />
                <Header />
            </div>
        );
    }
}

export default FunctionManage;