import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import Tabs from 'antd/lib/tabs'
import 'antd/lib/tabs/style/css'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import ComponentLoader from '../../../commons/componentloader'
import '../../../../static/styles/scss/pages-style/private/dashboard/maintabs.scss'
import '../../../../static/styles/scss/pages-style/private/dashboard/tab.scss'

const DynamicTab1Component: any = dynamic(() => import('./tab1'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});

const DynamicTab2Component: any = dynamic(() => import('./tab2'),
{   ssr: true,
    loading: () => <ComponentLoader/>
});


const { TabPane } = Tabs;

interface IState {

}

interface IProps {

}

export default class MainTabsIndex extends Component<IProps, IState> {

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
                <div className='private-dashboard-maintabs-wrapper' style={{backgroundColor: 'transparent'}}>
                    <Card style={{ width: '100%' }} size='small' bordered={false} hoverable={false}>
                        <Tabs defaultActiveKey='1'
                        //  type='card'
                        size='small' 
                        animated={false}>
                            <TabPane
                            tab={
                                <span>
                                <DynamicIcon type='apple' />
                                    Tab 1
                                </span>
                            }
                            key='1'
                            >                                
                                <DynamicTab1Component />
                            </TabPane>
                            <TabPane
                            tab={
                                <span>
                                <DynamicIcon type='android' />
                                    Tab 2
                                </span>
                            }
                            key='2'
                            >
                                <DynamicTab2Component />
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </>
        );
    }
}