import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import { InxtParagraphSpan } from '../../../../../../../utils/styled-components-global'
import InxtButton from '../../../../../../commons/button'

interface IProps {
    data: any;
}

const SubSection1Item: React.FunctionComponent<IProps> = ({ data }: any) => {
    const [ propdata, setpropdata ]: any = useState()
    const [ favorite, setfavorite ]: any = useState(data.favorite)
    const [ addcartlabel, setaddcartlabel ]: any = useState(false)
    
    useEffect(() => {
        setpropdata(data)
    });

    const Top: any = styled.div`
        width: 100%;
        height: 100%;
        // filter: blur(8px);
        border-radius: 5px;
        background: url(${
            isWebpSupported()
            ?   data.imageWebp
            :   data.image
        }) no-repeat center top; 
        -webkit-background-size: 100%;
        -moz-background-size: 100%;
        -o-background-size: 100%;
        transform: scale(1);
        transition: box-shadow 0.4s, transform 0.4s;
        background-size: contain;
        background-color: rgba(255, 255, 255, 0);
        background-blend-mode: normal;
        position: absolute;
        object-fit: cover;
        object-position: center;
        // ::after {
        //     content: ''
        //     width: 100%;
        //     border-bottom: solid 0.5px rgb(230, 230, 230);
        //     position: absolute;
        //     left: 0;
        //     top: 179px;
        //     z-index: 1;
        // }
        // &:hover {
        //     transform: scale(1.04);
        // }
        
    `;

    const _onClickCard = (item: any) => {
        console.log(`Card ${item} had been clicked`)
    }

    const _onMouseOverCardTop = (item: any) => {
        console.log(`Card ${item} had been overed with mouse`)
    }

    const _truncate = (str: string, strlength: number) => {
            return str.length > strlength ? str.substring(0, strlength - 3) + '...' : str;
    }
    
    return (
        propdata
        ?   <div onMouseOver={() => _onMouseOverCardTop(data.key)} onClick={() => _onClickCard(data.key)}>
                <div className='card-section1 animate card-subsection1-margin'>
                    <div className='item-container-header'>
                        <div className='item-icon item-icon-left'>
                            <InxtParagraphSpan className='tag' style={{ fontSize: 11, color: 'white' }}>-{propdata.discount}%</InxtParagraphSpan>
                            {/* <span className='tag'>-13%</span> */}
                        </div>
                        <div className='item-icon item-icon-right'>
                            {/* <HeartIcon onClick={()=> setfavorite(!favorite)} style={{ color: favorite ?  'hotpink' : '#b7b7b7' , fontSize: '1.35rem' }}/> */}
                            <DynamicIcon type='heart' theme={ favorite ? 'filled' : 'outlined' } onClick={()=> setfavorite(!favorite)} style={{ color: favorite ?  '#ff9090' : '#b7b7b7' , fontSize: '1.35rem' }} />
                        </div>
                    </div>

                    <div className='card-top'>
                        <Top className='top' />
                    </div>
                
                    <div className='card-bottom'>
                        <div className='card-container'>
                            <div className='header-card'>
                                <div className='price-contaner'>
                                    <InxtParagraphSpan style={{ fontSize: 11, fontWeight: 'bold' }}>$</InxtParagraphSpan>
                                    <h4 className='item-price'>{Math.round(propdata.price * ((100 - data.discount) / 100))}</h4>
                                    <InxtParagraphSpan style={{ fontSize: 11, fontWeight: 'bold' }}>.00</InxtParagraphSpan>
                                </div>
                                <div className='original-price'>
                                    <del>
                                        <InxtParagraphSpan>$</InxtParagraphSpan>
                                        <InxtParagraphSpan>{propdata.price}</InxtParagraphSpan>
                                        <InxtParagraphSpan>.00</InxtParagraphSpan>
                                        {/* <InxtParagraphSpan>MXN</InxtParagraphSpan> */}
                                    </del>
                                </div>
                            </div>
                            <div className='counter-container'>
                                <div className='counter'>
                                    <span style={{ width: `${propdata.bought * 100 / propdata.available}%` }}></span>
                                </div>
                                <InxtParagraphSpan className='counter-text'>{propdata.bought}/{propdata.available}</InxtParagraphSpan>
                            </div>
                            <div className='card-info'>
                                <InxtParagraphSpan>{_truncate(propdata.name, 35)}</InxtParagraphSpan>
                            </div>
                            <div className='card-functions' onClick={()=> setaddcartlabel(!addcartlabel)}>
                                <InxtButton primary={false} color1='#000' color2='#fff' borderColor='#000' inverted={true}>
                                    <InxtParagraphSpan style={{ color: '#000', fontWeight: 500, margin: '0 5px', fontSize: 11 }}>{addcartlabel ? 'Remove to cart' : 'Add to cart'}</InxtParagraphSpan>
                                    <DynamicIcon type='shopping-cart' style={{ color: '#000'}} />
                                </InxtButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :   null
    );

};

export default React.memo(SubSection1Item);