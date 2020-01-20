import React, { useState } from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import Tooltip from 'antd/lib/tooltip'
import 'antd/lib/tooltip/style/css'
import { 
    InxtParagraphSpan
    ,DeliveryIcon
    // ,HeartIcon
 } from '../../../../utils/styled-components-global'

interface IProps {
    data: any;
}

const meassure: number = 160
const { Meta } = Card;

const ItemComponent: React.FunctionComponent<IProps> = ({data}) => {
    const [ favorite, setFavorite ] = useState(data.favorite)

    return (
        <>
            <Card
                bordered={false}
                size='small'
                style={{ width: meassure, margin: 'auto' }}
                loading={false}
                hoverable={true}
                cover={isWebpSupported()
                    ?   <img alt={data.name} src={data.imageWebp} style={{ width: meassure - 6, height: 160, margin: 'auto' }} />
                    :   <img alt={data.name} src={data.image} style={{ width: meassure - 6, height: 160, margin: 'auto' }} />
                }>
                <Meta
                    title={
                        <>
                            <div className='item-container'>
                                <span style={{fontWeight: 'bold' }}>
                                    ${data.price}.00
                                </span>
                                {
                                    favorite
                                    ?   <DynamicIcon type='heart'  theme='filled' style={{color: '#ec4a56' }} onClick={() => setFavorite(!favorite)} />
                                    :   <DynamicIcon type='heart' style={{color: '#c8c8c8' }} onClick={() => setFavorite(!favorite)} />
                                }
                            </div>

                            <div className='item-container'>
                                <div>
                                    <InxtParagraphSpan style={{ fontSize: 10, textDecoration: 'line-through', color: '#999' }}>$231.00</InxtParagraphSpan>
                                </div>
                                <div className='feautes-item'>
                                    <div className='space-features'>
                                        {
                                            data.freeship
                                            ?   <>
                                                    <Tooltip title='Free shipping'>
                                                        <DeliveryIcon style={{ color: '#00a650' }} />
                                                    </Tooltip>
                                                </>
                                            :   null
                                        }
                                    </div>
                                    <div className='space-features'>
                                        {
                                            data.inshop 
                                            ?   <>
                                                    <Tooltip title='Availble in local store'>
                                                        <DynamicIcon type='shopping' style={{ color: '#00a650' }} />
                                                    </Tooltip>
                                                </>
                                            :   null
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    description={
                        <>
                            <div>{data.name}</div>
                        </>
                    }
                />
            </Card>
        </>
    )
}

export default ItemComponent;