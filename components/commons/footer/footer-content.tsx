import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import styled from 'styled-components'
import footerLinks from '../../../utils/footerlinks'
import { InxtParagraphSpan, InxtLinkLineHeight } from '../../../utils/styled-components-global'
// import { InxtSidebarNavLink } from '../../../interfaces/inxt-initinterfaces'
import ItemLazyLoader from '../../commons/lazyloader'

const FooterContainer: any = styled.div`
    padding: 5px;
    margin: auto;
    margin-bottom: 5px;
    text-align: center;
`;
const FooterItemContainer: any = styled.div`
    display: inline-grid;
`;

const FooterContent: React.FunctionComponent = () => {
    const [ data, setData ]: any = useState([]);

    useEffect(() => {
        setData(footerLinks['footer-items']);
    });
    
    return (
        <ItemLazyLoader proprootMargin={150}>
            <div className='footer'>
                <Row type='flex' justify='center' align='top'>
                    {
                        data
                        ?   data.map((item: any) => {
                            if(Array.isArray(item.sublinks)) {
                                return (
                                    <Col key={item.key} span={8} xs={8} sm={8} md={4} lg={4} xl={4} xxl={4}>
                                        <FooterContainer>
                                            <h5 className="footer-head-title">{item.section}</h5>
                                            <FooterItemContainer>
                                                {
                                                    item.sublinks.map((sublink: any) => {
                                                        return (
                                                            sublink
                                                            ?   <InxtLinkLineHeight key={sublink.key}>
                                                                    <InxtParagraphSpan style={{padding: '12px 0'}}>{sublink.section}</InxtParagraphSpan>
                                                                </InxtLinkLineHeight>
                                                            :   null
                                                        );
                                                    })
                                                }
                                            </FooterItemContainer>
                                        </FooterContainer>
                                    </Col>
                                );
                            }
                        })
                        :   null
                    }
                </Row>
            </div>
        </ItemLazyLoader>
    );
}

export default React.memo(FooterContent)