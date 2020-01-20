import { useState, useEffect } from 'react'
// import { Row, Col } from 'antd'
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'
import dynamic from 'next/dynamic'
import ItemLoader from '../../../../commons/itemloader'
import '../../../../../static/styles/scss/pages-style/store/index/subads/index.scss'

const DynamicSubAdsItem: any = dynamic(() => import('./item'),
{   ssr: false,
    loading: () => <ItemLoader />
});

interface IProps {
    data: any;
}

const _getOtherItems = (item: any) => {
    let otherItems: any = {
        sizeH: 125,
        item
    }

    return otherItems;
}

const SubAdsComponent: React.FunctionComponent<IProps> = ({ data }) => {
    const [ propdata, setpropdata ] = useState(data[0]);

    useEffect(() => {
        setpropdata(data[0])
    })
    
    let item: any = propdata['ads'][1];
    let secondCard: any = {
       sizeH: 251,
       item
    }

    let arrayslice: any = propdata.ads.slice(2);
    
    return (
        <>
            {
                propdata 
                ?   <div style={{ width: '100%', marginBottom: 20 * 2 }}>
                        <Row type='flex' justify='center' align='middle'>
                            <Col span={24} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <div style={{ width: '100%', height: secondCard.sizeH, background: '#E9E9E9'}}>
                                    <DynamicSubAdsItem data={secondCard} />
                                </div>
                            </Col>

                            <Col span={24} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Row type='flex' justify='space-between' align='middle'>
                                    {
                                        arrayslice.map((item: any) => {
                                            return (
                                                <Col key={item.key} span={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                    <div style={{ width: '100%', height: 125, background: '#E9E9E9' }}>
                                                        <DynamicSubAdsItem data={_getOtherItems(item)} />
                                                    </div>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </div>
                :   null
            }
        </>
    );
}

export default SubAdsComponent;