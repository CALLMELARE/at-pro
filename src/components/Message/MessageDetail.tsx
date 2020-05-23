import React, { } from 'react';
import detail from '../../test/messagedetail';
import { Col, Row } from 'antd';
const data = detail.data;

export interface Props {

}

export interface State {

}

class MessageDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div>
                <p className="mes-title">消息详情</p>
                <div className="mes-detail-card">
                    <Row className="mes-detail-header">
                        <Col offset={4} span={8} className="mes-detail-item">From:<span>{data[0].from}</span></Col>
                        <Col span={8} >{data[0].updated_at}</Col>
                    </Row>
                    <p className="mes-detail-item">内容:<span>{data[0].message}</span></p>
                </div>
            </div>
        );
    }
}

export default MessageDetail;