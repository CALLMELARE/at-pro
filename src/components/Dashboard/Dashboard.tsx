import React from 'react';
import { Row, Col, Card } from 'antd';

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}><Card>打招呼</Card></Col>
                    <Col span={12}><Card>周报</Card></Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard