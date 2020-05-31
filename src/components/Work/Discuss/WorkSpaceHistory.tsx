import React from 'react';
import { Row, Button, Col } from 'antd';
import { AndroidOutlined, AppleOutlined, BulbOutlined, CodeOutlined, ChromeOutlined, FormatPainterOutlined } from '@ant-design/icons';
import Icon from '../../public/Icons';
import UploadFile from '../../public/UploadFile';
import discussdetail from '../../../test/discussdetail';
import filelist from '../../../test/filelist';
const detail = discussdetail.data;
const file = filelist.data;

export interface Props {
    team: string[]
}

export interface State {

}

class WorkSpaceHistory extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    identifyFileType = (fileName: string) => {
        const typeName = fileName.split('.')[fileName.split('.').length - 1];
        let ico = Icon.any;
        const fdoc = ['doc', 'docx'];
        const fexcel = ['xls', 'xlsx'];
        const fimg = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'];
        const fmusic = ['mp3', 'wav', 'wma', 'aac'];
        const ftxt = ['txt'];
        const fzip = ['zip', '7z', 'rar'];
        const fppt = ['ppt', 'pptx'];
        const fpdf = ['pdf'];
        if (fdoc.includes(typeName)) {
            ico = Icon.doc;
        } else if (fexcel.includes(typeName)) {
            ico = Icon.xls;
        } else if (fimg.includes(typeName)) {
            ico = Icon.img;
        } else if (fmusic.includes(typeName)) {
            ico = Icon.music;
        } else if (ftxt.includes(typeName)) {
            ico = Icon.txt;
        } else if (fzip.includes(typeName)) {
            ico = Icon.zip;
        } else if (fpdf.includes(typeName)) {
            ico = Icon.pdf;
        } else if (fppt.includes(typeName)) {
            ico = Icon.ppt;
        }
        return ico;
    };

    swtichTeam = (team: string) => {
        switch (team) {
            case "0":
                return <span><AndroidOutlined /> Android</span>
            case "1":
                return <span><AppleOutlined /> iOS</span>
            case "2":
                return <span><BulbOutlined /> 产品</span>
            case "3":
                return <span><CodeOutlined /> 程序</span>
            case "4":
                return <span><ChromeOutlined /> 前端</span>
            case "5":
                return <span><FormatPainterOutlined /> 设计</span>
            default:
                break;
        }
    }

    renderFilelist = () => {
        let list: JSX.Element[] = [];
        file.map((item) => {
            list.push(
                <div className="workspace-file-item card-shadow">
                    <div>
                        <img src={this.identifyFileType(item.title)} alt="img" height={50} />
                    </div>
                    <a href={item.url}>
                        {item.title}
                    </a>
                </div>
            )
        })
        return list
    }

    renderTeamHistory = () => {
        let data = this.props.team;
        console.log(this.props.team);
        let Cards: JSX.Element[] = [];
        data.map((item) => {
            Cards.push(
                <Row className="workspace-his-card">
                    <Col span={24} className="workspace-his-team">{this.swtichTeam(item)}</Col>
                    <Col span={12}>
                        {this.renderFilelist()}
                    </Col>
                    <Col span={12} className="workspace-todo">
                        <p>本周做了：</p>
                        <div>1.初步完成需求文档 </div>
                        <p>下周要做：</p>
                        <div>
                            1.继续需求文档的完善 2.开始后台端
                        </div>
                    </Col>
                </Row>
            )
        })
        return (
            <Col span={24} className="workspace-his">
                <p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>2020-05-01 08:22</p>
                {Cards}
            </Col>
        )
    }

    render() {
        return (
            <Row>
                {this.renderTeamHistory()}
            </Row>
        );
    }
}

export default WorkSpaceHistory;