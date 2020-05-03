import React, { Component } from 'react';
import { EditOutlined, BookOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import '../../styles/work.scss';
import { Link } from 'react-router-dom';

class Message extends Component<any, any> {

    render() {
        return (
            <div>
                <div className="work-title">工作区</div>
                <Row className="work-space" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12} >
                        <Link to="/Work/EditReport">
                            <div className="work-space-card card-shadow">
                                <EditOutlined style={{ fontSize: "5rem" }} />
                                <span>编辑周报</span>
                            </div>
                        </Link>
                    </Col>
                    <Col span={12} >
                        <Link to="">
                            <div className="work-space-card card-shadow">
                                <BookOutlined style={{ fontSize: "5rem" }} />
                                <span>工作日志</span>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <div className="work-title">会议记录</div>
            </div>
        )
    }
}

export default Message
