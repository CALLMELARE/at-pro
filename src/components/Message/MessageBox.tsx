import { Component } from "react";
import React from "react";
import { Radio, Button, Row, Col } from "antd";
import msg from '../../test/message';

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
    onselect: boolean
}

function onChange(e: any) {
    console.log(`radio checked:${e.target.value}`);
}

class MessageBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            onselect: false,
        };
    }

    handleClickSelect = (e: any) => {
        e.preventDefault();
        this.setState({
            onselect: !onselect
        })
        console.log(this.state.onselect)
    }

    renderMesItem = (status: string, data: item) => {
        return (
            <Row className="mesbox-item">
                <Col span={1}>{status==="read"?null:<div className="pot"></div>}</Col>
                <Col span={17}><span className="mesbox-item-from">{data.from}:</span>{data.message.substring(0, 10)}</Col>
                <Col span={4}>{data.updated_at}</Col>
                <Col span={2}>{"工作室"}</Col>
            </Row>
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

    render() {
        return (
            <div className="mesbox">
                <div className="mesbox-header">
                    <span className="mesbox-header-title">{this.props.title}</span>
                    <span className="mesbox-header-filter">
                        <Radio.Group className="mesbox-header-filterl" onChange={onChange} defaultValue="all">
                            <Radio.Button value="all">全部</Radio.Button>
                            <Radio.Button value="notread">未读</Radio.Button>
                            <Radio.Button value="read">已读</Radio.Button>
                        </Radio.Group>
                        <Button className="mesbox-header-filterr" onClick={this.handleClickSelect.bind(this)}>多选</Button>
                    </span>
                </div>
                <div className="mesbox-list">
                    {this.renderMesList()}
                </div>
            </div>
        );
    }
}

export default MessageBox;