import React, { Component } from 'react'
// import '../../../../static/styles/index.scss'
import dynamic from 'next/dynamic'
import ComponentLoader from '../../../commons/componentloader'

const DynamicTab2ChartComponent: any = dynamic(() => import('./tab2-chart'),
{ ssr: false,
    loading: () => <ComponentLoader/>
});

interface IState {

}

interface IProps {

}

export default class Tab2 extends Component<IProps, IState> {

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
                <DynamicTab2ChartComponent />
            </>
        );
    }
}