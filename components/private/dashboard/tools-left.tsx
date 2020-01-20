import React, { Component } from 'react'
// import { Card, List } from 'antd'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import List from 'antd/lib/list'
import 'antd/lib/list/style/css'
import { InxtParagraphSpan } from '../../../utils/styled-components-global'
// import '../../../static/styles/index.scss'

const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Enim quisquam dolorem sint dolorum occaecati.',
    'illum eligendi. Voluptatem ullam voluptatibus.'
];

interface IState {
    tasks: string[];
}

interface IProps {

}

export default class ToolsLeft extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount(): void {
        this.setState({ tasks: data });
    }

    render(): JSX.Element {
        return (
            <>
                <div className='dashboardContainer'>
                    <Card title='Tasks' style={{ width: '100%' }} size='small' bordered={false} hoverable={false}>
                        <List
                            size='small'
                            bordered={false}
                            dataSource={this.state.tasks}
                            renderItem={item =>  <List.Item><InxtParagraphSpan>{item}</InxtParagraphSpan></List.Item>
                            }
                        />
                    </Card>
                </div>
                <div className='dashboardContainer'>
                    <Card title='Listings' style={{ width: '100%' }} size='small' bordered={false} hoverable={false}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </>
        );
    }
}