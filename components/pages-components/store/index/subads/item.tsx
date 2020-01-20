import React, { useState, useEffect } from 'react'
// import { Card } from 'antd'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import ItemLazyLoader from '../../../../commons/lazyloader'

interface IProps {
    data: any;
}

const SubAdsItem: React.FunctionComponent<IProps> = ({ data }: any) => {
    const [ propdata, setpropdata ]: any = useState()

    useEffect(() => {
        setpropdata(data)
    });

    return (
        <ItemLazyLoader proprootMargin={200}>
            <div style={{
                // margin: 'auto',
                flex: 1,
                flexDirection: 'column',
                display: 'flex',
                margin: '5px 2px 3px 0px',
                }}>
                <Card
                    bordered={false}
                    size='default'
                    style={{ height: data.sizeH }}
                    loading={false}
                    hoverable={true}
                    cover={
                        propdata
                        ?    <div style={{ height: propdata.sizeH, background: `#E9E9E9 url(${isWebpSupported() ? propdata.item.imageWebp : propdata.item.image}) no-repeat center center`, backgroundSize: 'cover' }}></div>
                        :   null
                    }
                    >
                </Card>
                {/* <InxtParagraphSpan>{data.item.name}</InxtParagraphSpan> */}
            </div>
        </ItemLazyLoader>
    );
}

export default React.memo(SubAdsItem);