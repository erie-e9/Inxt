import React, { useState } from 'react'
// import { Row, Col } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import StoreItem from './item'

interface IProps {
    data: any[];
}

const StoreComponent: React.FunctionComponent<IProps> = ({ data }: any) => {
    // @ts-ignore
    const [ propdata ] = useState(data);

    return (
        <>
            <div className='storeContainer'>
                <Row type='flex' justify='center' align='middle'>
                    {
                        propdata
                        ?   propdata.map((item: any) => {
                            return (
                                <Col key={item.key} xs={12} sm={8} md={6} lg={6} xl={6}>
                                    <StoreItem data={item} />
                                </Col>
                            )
                        })
                        :   null
                    }
                </Row>
            </div>
        </>
    )
}

export default StoreComponent;