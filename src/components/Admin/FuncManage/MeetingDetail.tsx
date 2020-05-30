import React from 'react';
import Panel from '../../public/AdminPanel';
import detail from '../../../test/meetingdetail';
import Donut from '../../public/ActivityDonut';

const data = detail.data;

export interface Props {

}

export interface State {

}

class MeetingDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {


        };
    }
    render() {
        return (
            <div>
                <Panel />
                <div className="admin-title">会议详情</div>
                <div className="func-mettingdetail card-shadow">
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">会议名称：</span>{data.title}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">会议时间：</span>{data.date}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">会议地点：</span>{data.address}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">发起人：</span>{data.sponsor}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">主持人：</span>{data.host}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">主要内容：</span>{data.desc}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">出勤比例：</span>{data.attend} / {data.supposed}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">会议记录：</span>{data.record}</p>
                    <p className="mettingdetail-list"><span className="mettingdetail-list-title">出勤情况：</span>
                        <Donut />
                    </p>
                </div>
            </div>
        );
    }
}

export default MeetingDetail;