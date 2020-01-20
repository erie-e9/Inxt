import React, { useState, useEffect } from 'react'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'
// import { TitleH3, TitleH4 } from '../../../utils/styled-components-global'
//  import ItemLoader from '../../commons/itemloader'
 import ItemLazyLoader from '../../commons/lazyloader'

const DynamicSection2Subsection2Item: any = dynamic(() => import('./section2-subsection1-item'),
{   ssr: false,
    // loading: () => <ItemLoader/>
});

interface IProps {
    data: any;
}

// @ts-ignore
const Subsection22: React.FunctionComponent<IProps> = ({ data }: any) => {
    // @ts-ignore
    const [ propdata, setpropdata ]: any = useState();

    // @ts-ignore
    var settings = {
        dots: !true,
        arrows: !true,
        touchMove: true,
        infinite: true,
        autoplay: !true,
        autoplaySpeed: 2000,
        speed: 500,
        // slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        lazyload: true,
        responsive: [
          {
              breakpoint: 300,
              settings: {
                //   slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 350,
              settings: {
                //   slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 410,
              settings: {
                //   slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 640,
              settings: {
                //   slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 740,
              settings: {
                //   slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 800,
              settings: {
                //   slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          },
          {
              breakpoint: 1040,
              settings: {
                //   slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: !true,
                  variableWidth: true,
                  lazyload: true,
              }
          }
        ]
    };
    
    useEffect(() => {
        setpropdata(data['specials'])
    });

    return (
        <div style={{ minHeight: 400 }}>
            <ItemLazyLoader proprootMargin={150}>
                <Row justify='center' align='top'>
                    <Col span={24} xs={24} sm={24} md={9} lg={9} xl={10} xxl={10}>
                        <div className='section2Sections' > 
                            <h3 className="section2-subsection1-title">SPECIALS</h3>
                            <h4 className="section2-subsection1-subtitle">ID ADIPISICING ENIM EA COMMODO</h4>
                            <Button type='dashed' size='small' >Call to action</Button> 
                        </div>
                    </Col>
                    <Col span={24} xs={24} sm={24} md={15} lg={15} xl={14} xxl={14}>
                        {/* <div className='section2Sections' > 
                            <h4 className="section2-subtitle">EST ET MAGNA ET CULPA NOSTRUD.</h4>
                        </div> */}
                        <Slider {...settings}>

                            {
                                propdata
                                ?   propdata.map((item: any) => {
                                        return <DynamicSection2Subsection2Item key={item.key} data={item} />
                                })
                                :   null
                            }
                            {/* <h3>Ver más...</h3> */}
                        </Slider>
                    </Col>
                </Row>
            </ItemLazyLoader>
        </div>
    )
}

export default Subsection22;