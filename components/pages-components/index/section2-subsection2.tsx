// import { Button, Divider } from 'antd'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import Divider from 'antd/lib/divider'
import 'antd/lib/divider/style/css'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
// import { InxtParagraph } from '../../../utils/styled-components-global'
// import '../../../static/styles/index.scss'
import ItemLazyLoader from '../../commons/lazyloader'
import Box from '../../commons/svgr/box'
import Hexagons from '../../commons/svgr/hexagons'

const Subsection21: React.FunctionComponent = () => {

    return (
        <>
            <div className='section2Sections'>
                <h3 className="section2-subsection2-title">What about</h3>
                <Row type='flex' justify='center' align='top'>
                    <Divider orientation='left'><span className="section2-subsection2-dividertext">Innovation</span></Divider>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='betweenSubSections' style={{padding: 70}} >
                            <h4 className="section2-subsection2-subtitle">MAGNA PRIMIS LOBORTIS SED</h4>
                            <p className="section2-subsection2-paragraph">Aliquam ut ex ut augue consectetur interdum fringilla nullam. Quod magni possimus excepturi autem quia fuga expedita.</p>
                            <Button type='dashed' size='small' >Call to action</Button>
                        </div>
                    </Col>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='section2Col2 betweenSubSections'>
                            <ItemLazyLoader proprootMargin={120}>
                                <Hexagons />
                            </ItemLazyLoader>
                        </div>
                    </Col>
                </Row>
                <Row type='flex' justify='center' align='top'>
                    <Divider orientation='right'><span className="section2-subsection2-dividertext">Design thinking</span></Divider>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <div className='section2Col2 betweenSubSections'>
                                <ItemLazyLoader proprootMargin={120}>
                                    <Box />
                                </ItemLazyLoader>
                            </div>
                    </Col>
                    <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='section2Col1 betweenSubSections'>
                            <div style={{padding: 70}} >
                                <h4 className="section2-subsection2-subtitle">PRAESENTIUM NIHIL CORRUPTI</h4>
                                <p className="section2-subsection2-paragraph">Provident et facilis est debitis est quis at dolores deleniti laboriosam, accusamus ex corporis eveniet sunt...</p>
                                <Button type='dashed' size='small' >Call to action</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Subsection21