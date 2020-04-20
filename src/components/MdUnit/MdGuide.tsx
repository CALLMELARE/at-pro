import React from 'react';
import MarkdownIt from 'markdown-it';
import { Table } from 'antd';
import hljs from 'highlight.js';
import data from './MdExample';
import 'highlight.js/styles/atom-one-light.css';

const columns = [
    {
        title: '含义',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '语法',
        dataIndex: 'lang',
        key: 'lang',
    },
    {
        title: '效果',
        dataIndex: 'expression',
        key: 'expression',
        render: (str: string) => (
            <span dangerouslySetInnerHTML={{ __html: md(str) }}></span>
        )
    },
];

const mdParser = new MarkdownIt(/* Markdown-it options */
    {
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (__) { }
            }
            return '' // use external default escaping
        }
    }
);

function md(str: string): string {
    return mdParser.render(str);
}

class MdGuide extends React.PureComponent {

    render() {
        return (
            <div>
                <span className="editreport-title">Markdown 语法指南</span>
                <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true,defaultPageSize:50 }} />
            </div>
        )
    }
}

export default MdGuide
