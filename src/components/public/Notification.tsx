import React, { Component } from 'react';
import { Drawer } from 'antd';
import '../../styles/noti.scss';
import notiData from '../../test/notification';
import { Link } from 'react-router-dom';

export interface Props {
    visible: boolean,
    onClose: any
}

export interface State {
}

class Message extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    renderNoti = () => {
        const data = notiData.data;
        let list: JSX.Element[] = [];
        data.map((item) => {
            list.push(
                <div className="noti-card" key={item.id}>
                    <Link to={`/Message/Detail?id=${item.id}`}>
                        <span className="noti-title">{item.topic}
                            <span className="noti-from">{item.from}</span>
                        </span>
                    </Link>
                    <div className="noti-content">
                        <span className="noti-text">{item.message}</span>
                        <span className="noti-time">{item.updated_at}</span>
                    </div>
                </div>
            )
        })
        return list;
    }

    render() {
        return (
            <div>
                <Drawer
                    title="最新通知"
                    placement='right'
                    closable={false}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    {this.renderNoti()}
                </Drawer>
            </div>
        )
    }
}

export default Message
