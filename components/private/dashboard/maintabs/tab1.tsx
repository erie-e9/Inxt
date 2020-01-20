import React, { Component } from 'react'
// import '../../../../static/styles/index.scss'
// import { Row, Col } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import dynamic from 'next/dynamic'
import ComponentLoader from '../../../commons/componentloader'

const DynamicTab1ChartComponent: any = dynamic(() => import('./tab1-chart'),
{ ssr: false,
    loading: () => <ComponentLoader/>
});

const DynamicTab1RightComponent: any = dynamic(() => import('./tab1-right'),
{ ssr: false,
    loading: () => <ComponentLoader/>
});

interface IState {

}

interface IProps {

}

export default class Tab1 extends Component<IProps, IState> {

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
                <Row type='flex' justify='center' align='top'>
                    <Col span={24} xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} className='spacecols'>
                        <DynamicTab1ChartComponent />
                    </Col>
                    <Col span={24} xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} className='spacecols'>
                        <DynamicTab1RightComponent />
                    </Col>
                </Row>
                
            </>
        );
    }
}