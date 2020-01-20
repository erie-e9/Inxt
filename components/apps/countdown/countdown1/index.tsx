import React, { Component } from 'react'
import countdown from 'countdown'
import CountDownItem from './item'
// import { InxtParagraph } from '../../../../utils/styled-components-global'
import '../../../../static/styles/scss/apps/countdown/index.scss'

interface IState {
    mounted: boolean;
    remainTime: any;
    timespan: any;
    titleDay: any;
    titleMonth: any;
    titleYear: any;
}

interface IProps {
    endDate: any;
}

export default class CountDown1Function extends Component<IProps, IState> {

    public state: IState;
    public now = new Date();
    public time: any;
    public numberDay: any = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']
    public monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    constructor(props: IProps) {
      super(props);
        this.state = {
            mounted: false,
            remainTime: this._remainTime(this.props.endDate),
            timespan: this._calculateTimespan(this.props.endDate),
            titleDay: this.numberDay[this.props.endDate.getDate() - 1],
            titleMonth: this.monthNames[this.props.endDate.getMonth()],
            titleYear: this.props.endDate.getFullYear(),
        };
    }

    componentDidMount() {
        this._timer()
    }

    componentWillUnmount() {
        this.time;
        clearInterval(this.time);
        this._timer();
    }

    _timer = () => {
        if (!this.state.mounted) {
            this.time = setInterval(() => {
                this.setState({ 
                    timespan: this._calculateTimespan(this.props.endDate),
                    remainTime: this._remainTime(this.props.endDate),
                    mounted: true
                });
    
                if (this.state.remainTime.value <= 1 && this.state.mounted === true){
                    clearInterval(this.time)
                    this.setState({
                        remainTime: 0,
                        mounted: false
                    })
                }
            }, 1000);
        }
    }

    // @ts-ignore
    _calculateTimespan(endDate) {
        let now = new Date();
        let timespan = countdown(now, endDate, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS);

        return timespan;
    }

    // @ts-ignore
    _remainTime(endDate) {
        let now = new Date();
        // @ts-ignore
        let remainTime = countdown(now, endDate, countdown.MILLISECONDS);
        return remainTime;
    }

    render(): JSX.Element {
        // @ts-ignore
        const { timespan, titleDay, titleMonth, titleYear, remainTime, mounted } = this.state;
        // console.log('remainTime ', remainTime.milliseconds)
        return (
            <>
                {
                    remainTime.value >= 1 && mounted
                    ?   <div className='countdown-wrapper'>
                            <div className='countdown-text'>
                                <h5 className='countdown-title'>>Ends {titleDay} {titleMonth} {titleYear}</h5>
                            </div>
                            <div className='countdown-counter'>
                                <CountDownItem value={timespan.days} label='Days' />
                                <CountDownItem value={timespan.hours} label='Hrs' />
                                <CountDownItem value={timespan.minutes} label='Min' />
                                <CountDownItem value={timespan.seconds} label='Sec' />
                            </div>
                        </div>
                    :   null
                }
            </>
        );
    }
}