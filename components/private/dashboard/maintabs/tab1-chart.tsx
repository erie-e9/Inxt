import React, { Component } from 'react'
import '../../../../static/styles/scss/pages-style/private/dashboard/tab.scss'
import * as d3 from 'd3'

interface IState {
    data: number[]
}

interface IProps {

}

export default class Tab1Chart extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {        
            data: [ 2, 4, 2, 6, 8, 10, 9, 4, 7, 1, 2 ]
        };
    }

    componentDidMount(): void {
        this.setState({  });
        this._drawBarChart(this.state.data)
    }

    _drawBarChart(data: any) {
        const canvasHeight = 300
        const canvasWidth = 700
        const scale = 20

        // @ts-ignore
       const svgCanvas: any = d3.select('.inxtcanvas')
        .append('svg')
        .attr('width', canvasWidth)
        .attr('height', canvasHeight)
        .style('background-color', '#f7f7f7')
        
        
        const defs = svgCanvas.append('defs');

        const bgGradient = defs
        .append('linearGradient')
        .attr('id', 'bg-gradient')
        .attr('gradientTransform', 'rotate(90)');
        bgGradient
        .append('stop')
        .attr('stop-color', '#00d4ff')
        .attr('offset', '0%');
        bgGradient
        .append('stop')
        .attr('stop-color', '#f7f7f7')
        .attr('offset', '100%');

        svgCanvas.selectAll('rect')
        .data(data).enter()
        .append('rect')
        .attr('width', 20)
        // @ts-ignore
        .attr('height', (datapoint) => datapoint * scale)
        .attr('fill', 'url(#bg-gradient)'
        // function() {
        //     return 'hsl(' + Math.random() * 360 + ',100%,50%)'
        // }
        )
        // @ts-ignore
        .attr('x', (datapoint, iteration) => iteration * 45)
        // @ts-ignore
        .attr('y', (datapoint) => canvasHeight - datapoint * scale)

        svgCanvas.selectAll('text')
        .data(data).enter()
            .append('text')
            // .transition()
            //     .duration(750)
            //     // @ts-ignore
            //     .delay(function(dataPoint, iteration) { return iteration * 10 })
            // @ts-ignore
            .attr('x', (dataPoint, i) => i * 45 + 7)
            // @ts-ignore
            .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
            // @ts-ignore
            .text(dataPoint => dataPoint)
    }

    render(): JSX.Element {
        return (
            <>
                <div className='inxtcanvas'></div>
            </>
        );
    }
}