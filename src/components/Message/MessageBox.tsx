import React, { Component } from "react";
import { Radio, Button, Row, Col, Checkbox, Form, message } from "antd";
import msg from '../../test/message';
import messages from "../../test/message";
import { Link } from "react-router-dom";

interface item {
    from: string,
    topic: string,
    updated_at: string,
    id: number,
    message: string
}

export interface Props {
    title: string,
}

export interface State {
    onselect: boolean,
    filter: any,
    selected: []
}

class MessageBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            onselect: false,
            filter: "",
            selected: []
        };
    }

    onFilterChange(e: any) {
        console.log(`radio checked:${e.target.value}`);
    }

    onSelectChange(checkedValues: any) {
        console.log('checked = ', checkedValues);

    }

    handleClickSelect = (e: any) => {
        e.preventDefault();
        let status = this.state.onselect
        this.setState({
            onselect: !status
        })
        console.log(this.state.onselect)
    }

    renderMesItem = (status: string, data: item) => {
        return (
            <Row className="mesbox-item">
                <Col span={1} className="mesbox-read-pot">{status === "read" ? null : <div className="pot"></div>}</Col>
                <Col span={this.state.onselect ? 16 : 17}>
                    <Link to={`/Message/Detail?id=${data.id}`}>
                        <span className="mesbox-item-from">{data.from}:</span>{data.message.substring(0, 10)}
                    </Link>
                </Col>
                <Col span={4}>{data.updated_at}</Col>
                <Col span={2}>{"工作室"}</Col>
                {
                    this.state.onselect ?
                        <Col span={1}>
                            <Checkbox value={data.id}></Checkbox>
                        </Col>
                        : null
                }
            </Row >
        )
    }

    renderMesList = () => {
        let data = msg.data;
        let list: JSX.Element[] = [];
        data.map((item) => {
            list.push(
                this.renderMesItem("notread", item)
            )
        })
        return list
    }

    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        message.success('删除成功');
    }

    render() {
        return (
            <div className="mesbox card-shadow">
                <Form
                    onFinish={this.onFinish}
                >
                    <div className="mesbox-header">
                        <span className="mesbox-header-title">{this.props.title}</span>
                        <span className="mesbox-header-filter">
                            <Radio.Group className="mesbox-header-filterl" onChange={this.onFilterChange} defaultValue="all">
                                <Radio.Button value="all">全部</Radio.Button>
                                <Radio.Button value="notread">未读</Radio.Button>
                                <Radio.Button value="read">已读</Radio.Button>
                            </Radio.Group>
                            <Button className="mesbox-header-filterr" onClick={this.handleClickSelect.bind(this)}>{this.state.onselect ? "退出多选" : "多选"}</Button>
                            {this.state.onselect ? <Button htmlType="submit" danger>删除</Button> : null}
                        </span>
                    </div>
                    <div className="mesbox-list">
                        <Form.Item
                            name="selected"
                        >
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onSelectChange}>
                                {this.renderMesList()}
                            </Checkbox.Group>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        );
    }
}

export default MessageBox;