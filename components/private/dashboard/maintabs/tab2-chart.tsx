import React, { Component } from 'react'
// import '../../../../static/styles/index.scss'
import * as d3 from 'd3'

interface IState {
    data: number[]
}

interface IProps {

}

export default class Tab2Chart extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: [ 1, 5, 8, 1, 4, 11, 2, 3, 3, 5, 8 ]
        };
    }

    componentDidMount(): void {
        this.setState({});
        this._drawBarChart()
    }

    _drawBarChart() {
        const margin = { top: 20, right: 20, bottom: 180, left: 45 }
        const svgWidth = 420;
        const svgHeight = 320;
        const width = svgWidth - margin.left - margin.right
        const height = svgHeight - margin.top - margin.bottom

        const svg = d3
        .select('.inxtcanvas2')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

        const defs = svg.append('defs');

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

        const graphArea = svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Donloaded from https://www.imdb.com/list/ls021348496/
        // @ts-ignore
        const dataURL: string = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721250/2018%20Movie%20Rankings.csv"

        (async () => {
        let data = await d3.csv(dataURL);

            // @ts-ignore
        const getX = d => d['Title'];
            // @ts-ignore
        const getY = d => +d['Num Votes']; // convert to number from string

        // filter Top 10 data, and sort by num of votes
        // @ts-ignore
        // @ts-nocheck
        data = data
            .slice(0, 10)
            // @ts-ignore
            .sort( (a, b) => -(getY(a) - getY(b)));

        const x = d3.scaleBand()
            .rangeRound([0, width])
            .domain(data.map(getX))
            .padding(0.1);

        const y = d3.scaleLinear()
            .range([height, 0])
            .domain([
            // @ts-ignore
            // @ts-nocheck
            d3.min(data, getY),
            // @ts-ignore
            // @ts-nocheck
            d3.max(data, getY)
            ])
            .nice();

        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y).ticks(5);

        const ax = graphArea
            .append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);

        ax.selectAll('text')
            .style('text-anchor', 'start')
            .style('alignment-baseline', 'middle')
            .attr('transform', `translate(${x.bandwidth() / 2}, 10) rotate(90)`)
        // @ts-ignore
        // @ts-nocheck
        graphArea
            .append('g')
            .attr('class', 'axis')
            .call(yAxis);
        // @ts-ignore
        // @ts-nocheck
        graphArea
            .selectAll('bar')
            .data(data)
            .enter().append('rect')
                .style('fill', 'url(#bg-gradient)')
                // @ts-ignore
                .attr('x', d => x(getX(d)) + 4)
                // @ts-ignore
                .attr('y', d => y(getY(d)))
                .attr('width', x.bandwidth() / 1.2)
                // @ts-ignore
                .attr('height', d => height - y(getY(d)));
        })();
    }

    render(): JSX.Element {
        return (
            <>
                <div className='inxtcanvas2'></div>
            </>
        );
    }
}