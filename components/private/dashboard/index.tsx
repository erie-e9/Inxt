import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import ComponentLoader from '../../commons/componentloader'

// @ts-ignore
const DynamicDesktopComponent: any = dynamic(() => import('./desktop'),
{ ssr: true,
  loading: () => <ComponentLoader/>
});

interface IState {

}

interface IProps {

}

export default class Dashboard extends Component<IProps, IState> {

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
        <DynamicDesktopComponent className='sidebar-wrapper' />
      </>
    );
  }
}