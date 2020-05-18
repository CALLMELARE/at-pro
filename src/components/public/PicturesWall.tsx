import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Component } from 'react';
import React from 'react';

export interface Props {

}

export interface State {

}

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    className: 'upload-list-inline',
};

class PictureWall extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Upload {...props}>
                    <Button><UploadOutlined />上传附件</Button>
                </Upload>
            </div>
        );
    }
}

export default PictureWall;