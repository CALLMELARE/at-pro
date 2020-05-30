import React, { Component } from 'react';
import MdEditor from '../../MdUnit/MdEditor';
import {
    QuestionCircleOutlined,
    SaveOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Button, Form, Mentions } from 'antd';
const { Option } = Mentions;

interface editorType {
    html: any,
    text: string
}

interface Props {

}

interface State {

}

var arr = ["## 做了什么", "## 遇到的问题", "## 下周的计划", "## 需要的支持"];
const defaltVal = arr.join("\n");

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 16 },
};

class WeekReportEdit extends Component<Props, State> {

    handleEditorChange({ html, text }: editorType) {
        console.log(html, text);
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    renderMemberList = () => {
        let list: JSX.Element[] = [];
        for (let i = 1; i < 8; i++) {
            list.push(
                <Option key={i} value={"友人" + i.toString()}>
                    友人{i}
                </Option>
            )
        }
        return list;
    }

    renderTagList = () => {
        let list: JSX.Element[] = [];
        for (let i = 1; i < 8; i++) {
            list.push(
                <Option key={i} value={"话题" + i.toString()}>
                    话题{i}
                </Option>
            )
        }
        return list;
    }

    render() {
        return (
            <div>
                <span className="editreport-title">编辑周报<a href="/Work/MdGuide" className="md-rule" target="_blank"><QuestionCircleOutlined /> 语法指南</a></span>
                <p className="editreport-tips">支持代码语法高亮</p>
                <div className="weekreport-md-container">
                    <MdEditor valueChange={this.handleEditorChange} defaltValue={defaltVal} />
                </div>

                <Form {...layout} className="mention-form" onFinish={this.onFinish}>
                    <Form.Item
                        label="@"
                        name="member"
                    >
                        <Mentions
                            style={{ width: '100%' }}
                            placeholder="( 输入你想 @ 的伙伴 )"
                            prefix="@"
                        >
                            {this.renderMemberList()}
                        </Mentions>
                    </Form.Item>

                    <Form.Item
                        label="#"
                        name="tag"
                    >
                        <Mentions
                            style={{ width: '100%' }}
                            placeholder="( 输入 # 相关主题 )"
                            prefix="#"
                        >
                            {this.renderTagList()}
                        </Mentions>
                    </Form.Item>
                    <div className="editreport-btn-group">
                        <Form.Item>
                            <Button htmlType="submit" className="editreport-btn"><SaveOutlined />保存</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" className="editreport-btn"><RocketOutlined />提交</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        )
    }
}

export default WeekReportEdit;
