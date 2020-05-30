import React from 'react';
import Panel from '../../public/AdminPanel';
import Header from './FunctionHeader';

export interface Props {

}

export interface State {

}

class AccountDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Panel />
                <Header />
                <div className="admin-title">账户信息</div>

            </div>
        );
    }
}

export default AccountDetail;