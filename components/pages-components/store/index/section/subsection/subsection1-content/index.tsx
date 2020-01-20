import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import { useSpring, animated } from 'react-spring'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'
import CountDown2Function from '../../../../../../apps/countdown/countdown2'
import '../../../../../../../static/styles/scss/pages-style/store/index/section/subsection/subsection1.scss'

const DynamicSubSection1Item: any = dynamic(() => import('./item'),
{   ssr: false,
    // loading: () => <ItemLoader/>
});

interface IProps {
    data: any;
}

const Section1Content: React.FunctionComponent<IProps> = ({ data, endDate }: any) => {
    const [ propdata, setpropdata ]: any = useState();

    var settings = {
        dots: !true,
        arrows: true,
        touchMove: true,
        infinite: true,
        autoplay: !true,
        autoplaySpeed: 2000,
        speed: 500,
        // slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        lazyload: true,
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: !true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    // slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true,
                    lazyload: true
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true,
                    lazyload: true
                }
            }
          ]
    };

    useEffect(() => {
        setpropdata(data);
    });
    
    // const endDate: any = new Date('December 25, 2019 00:00:00');
    const propendDate = new Date(endDate);
    // const transitions = useTransition(data, item => item.key, {
    //     from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    //     leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    //     delay: 1000 
    //     })
    const minheight: number = 300
    const [ ref, inView ] = useInView({
        /* Optional options */
        rootMargin: `${minheight}px`,
        threshold: 0,
        // triggerOnce: !true
    });

    const props: any = useSpring({ 
        from: { opacity: 0 }, 
        to:   { opacity: 1 }, 
        delay: 500 
    });

    return (
        <animated.div style={props}>
            <div ref={ref} style={{minHeight: minheight + 100}}>
                {
                    inView && propdata
                    ?    <div className='section-content'>
                            {/* <Row type='flex' justify='center' align='middle'>
                                <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <div className='subsection-head'>
                                        <CountDown2Function endDate={endDate} endedMessage='This offer has finished' />
                                    </div>
                                </Col>
                            </Row> */}

                            <CountDown2Function endDate={propendDate} endedMessage='This offer has finished'>
                                <div className='subsection-slickcontent'>
                                    <Slider {...settings}>
                                    
                                        {
                                            propdata.map((item: any) => <DynamicSubSection1Item key={item.key} data={item} />)
                                        }
                                        {/* {
                                            transitions.map(({ item, props, key }) =>
                                            <animated.div key={key} style={props}><DynamicSubSection1Item key={item.key} data={item} /></animated.div>
                                            )
                                        } */}
                                        
                                    </Slider>
                                </div>
                            </CountDown2Function>
                        </div>
                    :   null
                }
            </div>
        </animated.div>
    )
}

export default Section1Content