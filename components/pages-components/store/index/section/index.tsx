import React, { useState } from 'react'
// import { Layout } from 'antd'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style/css'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'
import { InxtLinkLineHeight } from '../../../../../utils/styled-components-global'
import sectionsubsectionslinks from '../../../../../utils/section-subsections-links'
import ComponentLoader from '../../../../commons/componentloader'

interface IProps {
    data: any
}

const DynamicSubSectionComponent: any = dynamic(() => import('./subsection'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const SectionComponent: React.FunctionComponent<IProps> = ({ data }: any) => {
    // @ts-ignore
    const [ propdata ]: any = useState(data);
    // @ts-ignore
    const [ hooksectionsubsectionslinks ]: any = useState(sectionsubsectionslinks);
    // @ts-ignore
    const [ sectionClicked, setsectionClicked ]: any = useState(0);
    // @ts-ignore
    var settings = {
        dots: false,
        arrows: false,
        touchMove: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            }
          ]
    };

    return (
        <>
            <Layout>
                <div className='section-head'>
                    <Slider {...settings}>

                        {
                            hooksectionsubsectionslinks
                            ?   hooksectionsubsectionslinks.navs.map((element: any, i: number) => {
                                if (Array.isArray(element.subsections) && element.subsections.length >= 1) {
                                    return (
                                        <InxtLinkLineHeight key={element.key} onClick={() => setsectionClicked(i)} >
                                            <p className="section-slidertext">{element.section}</p>
                                        </InxtLinkLineHeight>
                                    )
                                } else {
                                    return (
                                        <InxtLinkLineHeight key={element.key}>
                                            <p className="section-slidertext">{element.section}</p>
                                        </InxtLinkLineHeight>
                                    )
                                }
                            })
                            :   null
                        }
                    
                    </Slider>
                </div>
                {
                    hooksectionsubsectionslinks
                    ?   <DynamicSubSectionComponent data={hooksectionsubsectionslinks.navs[sectionClicked].subsections}/>
                    :   null
                }
            </Layout>
        </>
    )
}

export default SectionComponent