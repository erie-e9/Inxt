import React, { Component } from 'react'
// import { Row, Col } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
// import '../../../static/styles/index.scss'
import dynamic from 'next/dynamic'
import MainTabs from './maintabs'
import ComponentLoader from '../../commons/componentloader'
import '../../../static/styles/scss/pages-style/private/desktop/index.scss'

const DynamicToolsTopComponent: any = dynamic(() => import('./tools-top'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});

const DynamicToolsLeftComponent: any = dynamic(() => import('./tools-left'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});

const DynamicToolsCenterComponent: any = dynamic(() => import('./tools-center'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});

const DynamicToolsRightComponent: any = dynamic(() => import('./tools-right'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});

interface IState {

}

interface IProps {

}

export default class Desktop extends Component<IProps, IState> {

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
                <DynamicToolsTopComponent />
                <MainTabs />
                <div className='desktop-tools'>
                    <Row type='flex' justify='center' align='top'>
                        <Col span={24} xs={24} sm={24} md={7} lg={8} xl={7} xxl={8}>
                            <DynamicToolsLeftComponent />
                        </Col>
                        <Col span={24} xs={24} sm={24} md={10} lg={8} xl={10} xxl={8}>
                            <DynamicToolsCenterComponent />
                        </Col>
                        <Col span={24} xs={24} sm={24} md={7} lg={8} xl={7} xxl={8}>
                            <DynamicToolsRightComponent />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}