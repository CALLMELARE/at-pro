import React, { Component } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export interface Props {

}

export interface State {

}

class FuncHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="admin-title">功能管理</div>
                <Row className="func-header">
                    <Col span={5} className="card">
                        <Link to="/Admin/FunctionManage/Meeting" className="btn card-shadow">
                            会议管理
                        </Link>
                    </Col>
                    <Col span={5} className="card">
                        <Link to="/Admin/FunctionManage/Discuss" className="btn card-shadow">
                            讨论区管理
                        </Link>
                    </Col>
                    <Col span={5} className="card">
                        <Link to="/Admin/FunctionManage/Account" className="btn card-shadow">
                            账户管理
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FuncHeader;