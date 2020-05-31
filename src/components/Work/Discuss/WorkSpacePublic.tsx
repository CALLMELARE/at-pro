import React from 'react';
import { Row, Col, Input, Form, message, Button, Tabs } from 'antd';
import { FolderAddOutlined, AndroidOutlined, AppleOutlined, BulbOutlined, CodeOutlined, ChromeOutlined, FormatPainterOutlined } from '@ant-design/icons';
import filelist from '../../../test/filelist';
import Icon from '../../public/Icons';
import UploadFile from '../../public/UploadFile';
import discussdetail from '../../../test/discussdetail';

const detail = discussdetail.data;
const file = filelist.data;
const { TextArea } = Input;
const { TabPane } = Tabs;

export interface Props {
    type: boolean,
    team: string[]
}

export interface State {
    currentTeam: string | undefined
}

class WorkSpacePublic extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentTeam: undefined
        };
    }

    getTime = () => {
        let time = new Date()
        return time
    }

    handleTeamChange = (team: string) => {
        this.setState({
            currentTeam: team
        })
    }

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

    onFinish = (values: any) => {
        console.log('Success:', values);
        message.error("保存失败，请检查网络")
    };

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

    renderUpload = () => {
        return (
            <Col span={12} className="workspace-upload">
                <p>
                    已上传附件
                    <UploadFile />
                </p>
                <div className="workspace-filelist">
                    {this.renderFilelist()}
                </div>

            </Col>
        )
    }

    renderTodo = () => {
        return (
            <Col span={12} className="workspace-todo">
                <p>本周做了：</p>
                <Form.Item name="thisweek">
                    <TextArea rows={4} />
                </Form.Item>
                <p>下周要做：</p>
                <Form.Item name="nextweek">
                    <TextArea rows={4} />
                </Form.Item>
            </Col>
        )
    }

    renderPublicMenu = () => {
        let data = this.props.team;
        console.log(this.props.team);
        let Btns: JSX.Element[] = [];
        data.map((item) => {
            Btns.push(
                <Button
                    className="workspace-menu-btn"
                    type={this.state.currentTeam === item ? "primary" : "default"}
                    onClick={this.handleTeamChange.bind(this, item)}>
                    {this.swtichTeam(item)}
                </Button>
            )
        })
        return (
            <Col span={24} className="workspace-menu">
                {Btns}
            </Col>
        )
    }

    renderComment = () => {
        return (
            <Col span={12} className="workspace-todo">
                <p>批注；</p>
                <Form.Item name="comment">
                    <TextArea rows={10} placeholder="在这里进行批注" />
                </Form.Item>
            </Col>
        )
    }

    renderPublicPanel = () => {
        return (
            <Row className="workspace-panel">
                {this.renderUpload()}
                {this.renderComment()}
            </Row>
        )
    }

    render() {
        return (
            <Form
                onFinish={this.onFinish} style={{ width: "100%" }}
                initialValues={{
                    thisweek: "1.完成需求文档的更新 2.与各成员协商细节问题",
                    nextweek: "1.继续原型图的完善 2.思考后台端剩余部分"
                }}
            >
                <Row>
                    {this.props.type ? null : this.renderTodo()}
                    {this.props.type ? null : this.renderUpload()}
                    {this.props.type ? this.renderPublicMenu() : null}
                    {this.props.type ? this.renderPublicPanel() : null}
                </Row>
                <Form.Item name="submit">
                    <div className="workspace-submit">
                        <Button htmlType="submit">保存</Button>
                    </div>
                </Form.Item>
            </Form>
        );
    }
}

export default WorkSpacePublic;