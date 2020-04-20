import React from 'react';
import MdEditor from '../MdUnit/MdEditor';
import {
    QuestionCircleOutlined,
    SaveOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Button } from 'antd';

interface editorType {
    html: any,
    text: string
}

var arr = ["### 做了什么", "### 遇到的问题", "### 下周的计划", "### 需要的支持"];
const defaltVal = arr.join("\n");

class WeekReport extends React.PureComponent {

    handleEditorChange({ html, text }: editorType) {
        console.log(html, text);
    }

    render() {
        return (
            <div>
                <span className="editreport-title">编辑周报<a href="/Work/MdGuide" className="md-rule" target="_blank"><QuestionCircleOutlined /> 语法指南</a></span>
                <p className="editreport-tips">支持代码语法高亮</p>
                <div className="weekreport-md-container">
                    <MdEditor valueChange={this.handleEditorChange} defaltValue={defaltVal} />
                </div>
                <div className="editreport-btn-group">
                    <Button className="editreport-btn"><SaveOutlined />保存</Button>
                    <Button className="editreport-btn"><RocketOutlined />提交</Button>
                </div>
            </div>
        )
    }
}

export default WeekReport
