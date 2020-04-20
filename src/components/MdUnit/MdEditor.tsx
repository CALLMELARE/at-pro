import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';

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

class MdEditor extends Component<any, any> {

    render() {
        return (
            <Editor
                value={this.props.defaltValue}
                renderHTML={(text: string) => mdParser.render(text)}
                onChange={this.props.valueChange}
            />)
    }
}

export default MdEditor