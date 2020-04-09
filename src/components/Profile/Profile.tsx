import React from 'react';
import { Descriptions } from 'antd'

class Profile extends React.PureComponent {
    render() {
        return (
            <div>
                <Descriptions
                    title="个人信息"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

export default Profile