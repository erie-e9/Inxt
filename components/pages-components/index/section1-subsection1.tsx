import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import 'antd/lib/icon/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
// import { InxtParagraph } from '../../../utils/styled-components-global'
// import ItemLazyLoader from '../../commons/lazyloader'

const Subsection11: React.FunctionComponent = () => {
    return (
        <Row type='flex' justify='center' align='middle'>
            <Col span={24} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <div style={{ minHeight: 300 }}>
                    {/* <ItemLazyLoader proprootMargin={150}> */}
                        <div className='containerItem'>
                            <div className='item'>
                                <DynamicIcon type='code-sandbox' style={{ fontSize: '25px', color: '#323232' }} />
                                <p className="section1-subsection1-icontext">code</p>
                            </div>
                            <div className='contentItem'>
                                <span className="section1-subsection1-contenttext">Natusi fugiat est repudiandae vitae odit velit voluptatem.
                                    Molestias dolores velit.
                                </span>
                            </div>                     
                        </div>
                    {/* </ItemLazyLoader> */}
                </div>
            </Col>
            <Col span={24} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <div style={{ minHeight: 300 }}>
                    {/* <ItemLazyLoader proprootMargin={150}> */}
                        <div className='containerItem'>
                            <div className='item'>
                                <DynamicIcon type='heart' style={{ fontSize: '25px', color: '#323232' }} />
                                <p className="section1-subsection1-icontext">heart</p>
                            </div>
                            <div className='contentItem'>
                                <span className="section1-subsection1-contenttext">Tempore illo omnis. Velit ipsum possimus repellendus
                                    laboriosam dolor quas. Quia occaecati nihil.
                                </span>
                            </div>                     
                        </div>
                    {/* </ItemLazyLoader> */}
                </div>
            </Col>
            <Col span={24} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <div style={{ minHeight: 300 }}>
                    {/* <ItemLazyLoader proprootMargin={150}> */}
                        <div className='containerItem'>
                            <div className='item'>
                                <DynamicIcon type='double-right' style={{ fontSize: '25px', color: '#323232' }} />
                                <p className="section1-subsection1-icontext">advance</p>
                            </div>
                            <div className='contentItem'>
                                <span className="section1-subsection1-contenttext">Nemo aut et impedit recusandae qui maiores incidunt.
                                    Optio quisquam sunt. Aut accusantiu.
                                </span>
                            </div>                     
                        </div>
                    {/* </ItemLazyLoader> */}
                </div>
            </Col>
        </Row>
    );
}

export default Subsection11