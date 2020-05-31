import React from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';

export interface Props {

}

export interface State {

}

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    className: 'upload-list-inline',
};

class UploadFile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Upload {...props}>
                    <Button><FolderAddOutlined /></Button>
                </Upload>
            </div>
        );
    }
}

export default UploadFile;