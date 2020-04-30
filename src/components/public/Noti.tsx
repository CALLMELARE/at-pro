import React, { Component, ReactNode } from 'react';
import { Button, notification } from 'antd';
import {
    CheckCircleOutlined,
    QuestionCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    InfoCircleOutlined,
    DeleteOutlined,
    NotificationOutlined
} from '@ant-design/icons';

interface propType {
    type?: string,
    title: string | ReactNode,
    during?: number,
    content: string | ReactNode,
    position?: string,
    btn: string | ReactNode
}

class Noti extends Component<any, any>{
    constructor(props: propType) {
        super(props)
    }

    switchPosition = (pos: string) => {
        if (pos) {
            switch (pos) {
                case "TL":
                    return "topLeft";
                    break;
                case "TR":
                    return "topRight";
                    break;
                case "BL":
                    return "bottomLeft";
                    break;
                case "BR":
                    return "bottomRight";
                    break;
            }
        } else {
            return "topRight"
        }
    }

    switchIcon = (type: string) => {
        if (type) {
            switch (type) {
                case "success":
                    return <CheckCircleOutlined style={{ color: "#52c41a" }} />
                    break;
                case "info":
                    return <InfoCircleOutlined style={{ color: "#1890ff" }} />
                    break;
                case "warning":
                    return <ExclamationCircleOutlined style={{ color: "#faad14" }} />
                    break;
                case "error":
                    return <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
                    break;
                case "help":
                    return <QuestionCircleOutlined style={{ color: "#FF7F00" }} />
                    break;
                case "del":
                    return <DeleteOutlined />
                    break;
                case "noti":
                    return <NotificationOutlined />
                    break;
            }
        } else {
            return null
        }
    }

    openNotification = () => {
        notification.open({
            message: this.props.title,
            description: this.props.content,
            duration: this.props.during,
            placement: this.switchPosition(this.props.position),
            icon: this.switchIcon(this.props.type),
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    render() {
        return (
            <Button className="noti-btn" onClick={this.openNotification}>
                {this.props.btn}
            </Button>
        )
    }
}

export default Noti