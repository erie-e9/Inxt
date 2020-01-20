import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import Statistic from 'antd/lib/statistic'
import 'antd/lib/statistic/style/css'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'

interface IState {

}

interface IProps {

}

export default class ToolsRight extends Component<IProps, IState> {

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
                    <Card title='Montly limits' style={{ width: '100%' }} size='small' bordered={false} hoverable={false}>
                    <Row gutter={16}>
                            <Col span={12}>
                                <Card size='small' bordered={false} hoverable={true}>
                                    <Statistic
                                        title='Active'
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<DynamicIcon type='arrow-up' />}
                                        suffix='%'
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card size='small' bordered={false} hoverable={true}>
                                    <Statistic
                                        title='Idle'
                                        value={9.3}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<DynamicIcon type='arrow-down' />}
                                        suffix='%'
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className='dashboardContainer'>
                    <Card title='Feedback' style={{ width: '100%' }} size='small' bordered={false} hoverable={false}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </>
        );
    }
}