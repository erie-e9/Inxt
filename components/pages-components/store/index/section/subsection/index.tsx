import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'
// import Section1Content from './subsection1-content'
import { InxtParagraphSpan, InxtLinkLineHeight } from '../../../../../../utils/styled-components-global'
import bycategory from '../../../../../../utils/bycategory'
import trending from '../../../../../../utils/trending'
import ComponentLoader from '../../../../../commons/componentloader'

interface IProps {
    data: any
}

const DynamicSection1Content: any = dynamic(() => import('./subsection1-content'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const DynamicSection2Content: any = dynamic(() => import('./subsection2-content'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const DynamicSection3Content: any = dynamic(() => import('./subsection3-content'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

// @ts-ignore
const SubSectionComponent: React.FunctionComponent<IProps> = ({ data }: any) => {
    
    const [ propdata, setpropdata ]: any = useState()
    const [ prop2data, setprop2data ]: any = useState();
    const [ prop3data, setprop3data ]: any = useState();
    
    const [ sectionClicked, setsectionClicked ]: any = useState(0);

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
        variableWidth: true,
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    variableWidth: !true,
                }
            }
          ]
    };

    useEffect(() => {
        setpropdata(data);
        setprop2data(bycategory)
        setprop3data(trending)
    })

    return (
        <>
            <div className='subsection-menu'>
                <Slider {...settings}>
                    
                    {
                        propdata
                        ?   propdata.map((element: any, i: number) => {
                            return (
                                <div className='subsection-item' key={element.key} onClick={() => setsectionClicked(i)}>
                                    <InxtLinkLineHeight style={{ lineHeight: 0 }}>
                                        <InxtParagraphSpan>{element.section}</InxtParagraphSpan>
                                    </InxtLinkLineHeight>
                                </div>
                            );
                        })
                        :   null
                    }
                    
                </Slider>
            </div>
           
                {
                    propdata
                    ?   <DynamicSection1Content data={propdata[sectionClicked].topitems} endDate={propdata[sectionClicked].endDate}/>
                    :   null
                }

                {
                    prop2data
                    ?   <DynamicSection2Content data={prop2data}/>
                    :   null
                }

                {
                    prop3data
                    ?   <DynamicSection3Content data={prop3data}/>
                    :   null
                }

        </>
    )
}

export default SubSectionComponent;