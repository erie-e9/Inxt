import React, { Component } from 'react'
import { colors } from '../../../utils/constants'
import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'

const { Meta } = Card;
// const { Countdown } = Statistic;
// const deadline: any = Date.now() + 24 * 2 + 1000 * 30;

// function onFinish(): any {
//     // alert('Offer finished!');
// }

interface IState {

}

interface IProps {

}

export default class ToolsTop extends Component<IProps, IState> {

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
                    <Row type='flex' justify='space-between' align='top'>
                        <Col span={24} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Card size='default' style={{ marginLeft: 1, marginRight: 2, marginBottom: 3, width: 200, height: 90 }}
                                loading={false} bordered={false} hoverable={true}
                                // extra={<DynamicIcon style={{ fontSize: 10}} type='right' key='right' />}
                                // actions={[
                                //     <DynamicIcon style={{ fontSize: 11 }} type='setting' key='setting' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='edit' key='edit' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='ellipsis' key='ellipsis' />,
                                // ]}
                                >
                                <Meta
                                    title='Card title'
                                    description='Description'
                                    avatar={
                                        <DynamicIcon type='thunderbolt' theme='twoTone' twoToneColor={colors.GREEN} />
                                    }
                                />
                            </Card>
                        </Col>
                        <Col span={24} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Card size='default' style={{ marginLeft: 1, marginRight: 2, marginBottom: 3, width: 200, height: 90 }}
                                loading={false} bordered={false} hoverable={true}
                                // extra={<DynamicIcon style={{ fontSize: 10}} type='right' key='right' />}
                                // actions={[
                                //     <DynamicIcon style={{ fontSize: 11 }} type='setting' key='setting' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='edit' key='edit' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='ellipsis' key='ellipsis' />,
                                // ]}
                                >
                                <Meta
                                    title='Card title'
                                    description='Description'
                                    avatar={
                                        <DynamicIcon type='pie-chart' theme='twoTone' twoToneColor={colors.GREEN} />
                                    }
                                />
                            </Card>
                        </Col>
                        <Col span={24} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Card size='default' style={{ marginLeft: 1, marginRight: 2, marginBottom: 3, width: 200, height: 90 }}
                                loading={false} bordered={false} hoverable={true}
                                // extra={<DynamicIcon style={{ fontSize: 10}} type='right' key='right' />}
                                // actions={[
                                //     <DynamicIcon style={{ fontSize: 11 }} type='setting' key='setting' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='edit' key='edit' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='ellipsis' key='ellipsis' />,
                                // ]}
                                >
                                <Meta
                                    title='Card title'
                                    description='Description'
                                    // description={<IconFacebook />}
                                    // {
                                    //     <Row type='flex' justify='space-between' align='top'>
                                    //         <Col span={12} xs={12} md={12} lg={12} xl={12} xxl={12}>
                                    //             <Statistic
                                    //                 value={'1.5k'}
                                    //                 valueStyle={{ fontSize: 11 }}
                                    //                 prefix={<DynamicIcon type='like' />}
                                    //                 />
                                    //         </Col>
                                    //         <Col span={12} xs={12} md={12} lg={12} xl={12} xxl={12}>
                                    //             <Statistic
                                    //                 value={'913k'}
                                    //                 valueStyle={{ fontSize: 11 }}
                                    //                 prefix={<DynamicIcon type='youtube' />}
                                    //                 />
                                    //         </Col>
                                    //     </Row>
                                    // }
                                    avatar={
                                        <DynamicIcon type='control' theme='twoTone' twoToneColor={colors.GREEN} />
                                    }
                                />
                            </Card>
                        </Col>
                        <Col span={24} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Card size='default' style={{ marginLeft: 1, marginRight: 2, marginBottom: 3, width: 200, height: 90 }}
                                loading={false} bordered={false} hoverable={true}
                                // extra={<DynamicIcon style={{ fontSize: 10}} type='right' key='right' />}
                                // actions={[
                                //     <DynamicIcon style={{ fontSize: 11 }} type='setting' key='setting' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='edit' key='edit' />,
                                //     <DynamicIcon style={{ fontSize: 11 }} type='ellipsis' key='ellipsis' />,
                                // ]}
                                >
                                <Meta
                                    title='Card title'
                                    description='Description'
                                    // description={
                                    //     <Countdown
                                    //         value={deadline}
                                    //         valueStyle={{ fontSize: 12, color: 'red' }}
                                    //         format='HH:mm:ss:SSS'
                                    //         onFinish={onFinish} />
                                    // }
                                    avatar={
                                        <DynamicIcon type='check-circle' theme='twoTone' twoToneColor={colors.GREEN} />
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}