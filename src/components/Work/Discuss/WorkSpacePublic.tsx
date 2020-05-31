import React from 'react';
import { Row, Col, Input, Form, message } from 'antd';
import { FolderAddOutlined } from '@ant-design/icons';
import filelist from '../../../test/filelist';
import Icon from '../../public/Icons';
const file = filelist.data;

const { TextArea } = Input;

export interface Props {
    type: string
}

export interface State {

}

class WorkSpacePublic extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {


        };
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
                        <img src={this.identifyFileType(item.title)} alt="img" height={50}/>
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
                    <FolderAddOutlined />
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

    render() {
        return (
            <Form onFinish={this.onFinish} style={{ width: "100%" }}>
                <Row>
                    {this.renderTodo()}
                    {this.renderUpload()}
                </Row>
            </Form>
        );
    }
}

export default WorkSpacePublic;