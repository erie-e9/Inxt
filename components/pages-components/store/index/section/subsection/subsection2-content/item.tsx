import React, { useState, useEffect } from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import { InxtParagraphSpan } from '../../../../../../../utils/styled-components-global'
import InxtButton from '../../../../../../commons/button'

 interface IProps {
    data: any;
}

// @ts-ignore
const SubSection2Item: React.FunctionComponent<IProps> = ({ data }: any) => {
    // @ts-ignore
    const [ propdata, setpropdata ]: any = useState()

    useEffect(() => {
        setpropdata(data)
    })

    const Top: any = styled.div`
        width: 100%;
        height: 100%;
        filter: blur(8px);
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
        background-color: rgba(245, 245, 245, 0);
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
        //     top: 180px;
        //     z-index: 1;
        // }
        // &:hover {
        //     transform: scale(1.04);
        // }

    `;

    return (
        <div style={{ minHeight: 200 }}>
            {
                propdata
                ?   <>
                        <div className='card-section2 animate card-subsection2-margin'>
                            <Top className='top' />
                            <div className='card-functions' style={{position: 'absolute', top: 145}}>
                                <InxtButton primary={false} color1='#fff' color2='transparent' borderColor='#fff' inverted={true}>
                                    <InxtParagraphSpan style={{ color: '#fff', fontWeight: 500, margin: '0 5px', fontSize: 11 }}> Go to {propdata.name}</InxtParagraphSpan>
                                </InxtButton>
                            </div>
                        </div>
                    </>
                :   null
            }
        </div>
    );

};


export default React.memo(SubSection2Item);