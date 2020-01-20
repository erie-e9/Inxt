import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import 'intersection-observer'
// import { TitleH4 } from '../../../../../../../utils/styled-components-global'
// import './subsection2-item.scss'
import '../../../../../../../static/styles/scss/pages-style/store/index/section/subsection/subsection2.scss'
// import ItemLazyLoader from '../../../../../../commons/lazyloader'

const DynamicSubSection2Item: any = dynamic(() => import('./item'),
{   ssr: false,
    // loading: () => <ItemLoader/>
});

interface IProps {
    data: any;
}

const Section2Content: React.FunctionComponent<IProps> = ({ data }: any) => {
    const [ propdata, setpropdata ]: any = useState();

    var settings = {
        dots: !true,
        arrows: !true,
        infinite: true,
        autoplay: !true,
        autoplaySpeed: 2000,
        speed: 750,
        // slidesToShow: 6,
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
                //   slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !true,
                variableWidth: true,
                lazyload: true
              }
          },
          {
              breakpoint: 800,
              settings: {
                //   slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !true,
                variableWidth: true,
                lazyload: true
              }
          },
          {
              breakpoint: 1040,
              settings: {
                //   slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !true,
                variableWidth: true,
                lazyload: true
              }
          }
        ]
    };

    useEffect(() => {
        setpropdata(data)
    });
    
    const minheight: number = 200
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
                    ?   <div className='section-content'>
                            <h4 className="store-subsection2-title">Categories</h4>
                            {/* <ItemLazyLoader proprootMargin={200}> */}
                                <Slider {...settings}>
                                    
                                    {
                                        propdata
                                        ?   propdata.bycategory.map((item: any) => {
                                                return (
                                                    <DynamicSubSection2Item key={item.key} data={item} />
                                                );
                                        })
                                        :   null
                                    }

                                </Slider>
                            {/* </ItemLazyLoader> */}
                        </div>
                    :   null
                }
            </div>
        </animated.div>
    )
}

export default Section2Content