import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import Divider from 'antd/lib/divider'
import 'antd/lib/divider/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
// import { InxtParagraph, InxtParagraphSpan } from '../../../utils/styled-components-global'
// import {<p className="section2-subsection2-paragraph" ls/styled-components-global'
// import ItemLazyLoader from '../../commons/lazyloader'
import Abstract from '../../commons/svgr/abstract'

const Subsection41: React.FunctionComponent = () => {

    return (
        <>
            <div className='section2Sections'>
                <h3 className="section4-subsection1-title">Talk with us</h3>
                <Row type='flex' justify='center' align='top'>
                <Divider orientation='left'><span className="section4-subsection1-dividertext">Communication</span></Divider>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='betweenSubSections' style={{padding: 70}} >
                            <h4 className="section4-subsection1-subtitle">DOLORUM REM EA ENIM DUCIMUS</h4>
                            <p className="section4-subsection1-paragraph" >Nihil maiores quisquam. Eos dignissimos eius accusamus commodi.</p>
                                <Button type='dashed' size='small' >Call to action</Button>
                        </div>
                    </Col>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='section4Col2 betweenSubSections'>
                            {/* <ItemLazyLoader proprootMargin={120}> */}
                                <Abstract />
                            {/* </ItemLazyLoader> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Subsection41