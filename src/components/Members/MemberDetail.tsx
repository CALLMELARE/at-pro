import React from 'react';
import icon from '../../assets/usericon.png';
import userinfo from '../../test/userinfo';
import { Col } from 'antd';

export interface Props {

}

export interface State {

}

class MemberDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    getAuthName(authType: number) {
        if (authType === 0 || authType === 1 || authType === 2) {
            switch (authType) {
                case 0:
                    return "组员";
                    break;
                case 1:
                    return "组长";
                    break;
                case 2:
                    return "管理员";
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <Col offset={6} span={12} className="mem-detail card-shadow">
                <div className="mem-detail-icon">
                    <img width={150} height={150} src={icon} alt="" />
                </div>
                <div className="mem-detail-content">
                    <p className="mem-detail-name">{userinfo.name}</p>
                    <p className="mem-detail-id">{userinfo.studentid}</p>
                    <p className="mem-detail-str">有些人生命里出现一次就够了，遇到是我的幸运。</p>
                    <p className="mem-detail-contact">
                        <span>北洋园校区</span>
                        <span>{userinfo.team}</span>
                        <span>{this.getAuthName(userinfo.auth)}</span>
                    </p>
                    <p className="mem-detail-contact">{userinfo.email}</p>
                </div>
            </Col>
        );
    }
}

export default MemberDetail;