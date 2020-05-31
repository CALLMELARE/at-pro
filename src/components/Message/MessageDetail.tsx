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
                <div className="mes-detail-card card-shadow">
                    <Row className="mes-detail-header">
                        <Col span={12} className="mes-detail-item">
                            From:<span>{data[0].from}</span>
                        </Col>
                        <Col span={12} >
                            {data[0].updated_at}
                        </Col>
                    </Row>
                    <p className="mes-detail-content">内容:<span>{data[0].message}</span></p>
                </div>
            </div>
        );
    }
}

export default MessageDetail;