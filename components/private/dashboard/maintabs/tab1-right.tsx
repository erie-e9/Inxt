import React, { Component } from 'react'
// import { List, Avatar, Card } from 'antd'
import List from 'antd/lib/list'
import 'antd/lib/list/style/css'
import Avatar from 'antd/lib/avatar'
import 'antd/lib/avatar/style/css'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'

interface IState {
    data: any[]
}

interface IProps {

}

export default class Tab1Chart extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                }
            ]
        };
    }

    componentDidMount(): void {
        this.setState({  });
    }

    render(): JSX.Element {
        return (
            <>
            <Card title='Sales summary' size='small' bordered={false} hoverable={false}>
                <List
                size='small'
                itemLayout='horizontal'
                dataSource={this.state.data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description='Ant Design, UI framework.'
                    />
                </List.Item>
                )}
                />
                </Card>
            </>
        );
    }
}