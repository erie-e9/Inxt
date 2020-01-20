import React, { Component } from 'react'
// import { colors } from '../../../utils/constants'
// import { Card } from 'antd'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
// import '../../../static/styles/index.scss'

interface IState {

}

interface IProps {

}

export default class ToolsCenter extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(): void {
        this.setState({});
    }

    render(): JSX.Element {
        return (
            <>
                <div className='dashboardContainer'>
                    <Card title='Sales'
                        style={{ width: '100%', marginLeft: 10, marginRight: 10 }} 
                        size='small'
                        bordered={false}
                            hoverable={false}>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Card>
                </div>
            </>
        );
    }
}