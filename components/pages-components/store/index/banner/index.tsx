import { useState } from 'react'
// import { Row, Col, Divider } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import Divider from 'antd/lib/divider'
import { InxtParagraphSpan } from '../../../../../utils/styled-components-global'
import '../../../../../static/styles/scss/pages-style/store/index/banner/index.scss'

interface IProps {
    data: any
}

const BannerComponent: React.FunctionComponent<IProps> = ({data}: any) => {
    const [ propdata ] = useState(data[1]);

    return (
        <>
            <div className='banner-container'>
                <Row type='flex' justify='center' align='middle'>
                    {
                        propdata
                        ?   propdata.banners.map((item: any) => {
                                return (
                                    <Col key={item.key} style={{ textAlign: 'center' }} span={7} xs= {7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                                        <InxtParagraphSpan>{item.name}</InxtParagraphSpan>
                                        <Divider type='vertical' style={{ background: '#999' }} />
                                    </Col>
                                )
                        })
                        :   null
                    }
                </Row>
            </div>
        </>
    );
}

export default BannerComponent;