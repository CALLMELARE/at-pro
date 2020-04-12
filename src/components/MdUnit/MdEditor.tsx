import React, { Component } from 'react';
import MarkdownIt from 'markdown-it'
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

interface editorType {
    html: any,
    text: string
}

class MdEditor extends Component<any, any> {

    handleEditorChange({ html, text }: editorType) {
        console.log('handleEditorChange', html, text)
    }

    render() {
        return (
            <Editor
                value=""
                renderHTML={(text: string) => mdParser.render(text)}
                onChange={this.handleEditorChange}
            />)
    }
}

export default MdEditor