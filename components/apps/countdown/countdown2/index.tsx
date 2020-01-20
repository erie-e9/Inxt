import React, { useState, useEffect } from 'react'
import countdown from 'countdown'
import CountDownItem from './item'
// import { TitleH5 } from '../../../../utils/styled-components-global'
import '../../../../static/styles/scss/apps/countdown/index.scss'

interface IProps {
    children: any;
    endDate: any;
    endedMessage: any;
}

// @ts-ignore
export const timer = (endDate) => {
    let now = new Date();
    const [ mounted, setmounted ]: any = useState(!true);
    const [ timespan, settimespan ]: any = useState(countdown(now, endDate, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS));
    const [ remainTime, setremainTime ]: any = useState(countdown(now, endDate, countdown.MILLISECONDS));
    const abortController = new AbortController();
    // const signal = abortController.signal;

    let time: any;
    useEffect(() => {
        setmounted(true)
        time = setInterval(() => {
            settimespan(countdown(now, endDate, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS));
            setremainTime(countdown(now, endDate, countdown.MILLISECONDS));
            // console.log('tiempo restante: ', remainTime.value);
        }, 1000)
        
        return function cleanup() {
            abortController.abort();
            clearInterval(time)
        }
    });
    
    return {
        mounted,
        timespan,
        remainTime
    };
}

const CountDown2Function: React.FunctionComponent<IProps> = ({ children, endDate, endedMessage }: any ) => {
    const [ titleDay, settitleDay ]: any = useState();
    const [ titleMonth, settitleMonth ]: any = useState();
    const [ titleYear, settitleYear ]: any = useState();
    
    const numberDay: any = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']
    const monthNames: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    // @ts-ignore
    const { mounted, timespan, remainTime } = timer(endDate);

    // functions
    useEffect(() => {
        settitleDay(numberDay[endDate.getDate() - 1])
        settitleMonth(monthNames[endDate.getMonth()])
        settitleYear(endDate.getFullYear())
    });

    return (
        <>
            {
                remainTime.value >= 1
                ?   <>
                        <div className='countdown-wrapper'>
                            <div className='countdown-text'>
                                <h5 className='countdown-title'>{titleDay} {titleMonth} {titleYear}</h5>
                            </div>
                            <div className='countdown-counter'>
                                <CountDownItem value={`${timespan.days}`} label='Days' />
                                <CountDownItem value={`${timespan.hours}`} label='Hrs' />
                                <CountDownItem value={`${timespan.minutes}`} label='Min' />
                                <CountDownItem value={`${timespan.seconds}`} label='Sec' />
                            </div>
                        </div>
                        {children}
                    </>
                :   <p>{endedMessage}</p>
            }
        </>
    );
}

export default CountDown2Function