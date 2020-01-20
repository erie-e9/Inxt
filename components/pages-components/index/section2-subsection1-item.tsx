import { useState, useEffect } from 'react'
// import { Card } from 'antd'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
// import ItemLazyLoader from '../../../components/commons/lazyloader'
// import ItemLoader from '../../../components/commons/itemloader'
// import { InxtParagraphSpan } from '../../../utils/styled-components-global'

interface IProps {
    data: any;
}

const Section2Subsection2Item: React.FunctionComponent<IProps> = ({ data }: any )=> {
    const [ propdata, setpropdata ]: any = useState()
        
    const Top: any = styled.div`
        width: 100%;
        height: 100%;
        // height: 260px;
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
        background-color: rgba(245, 245, 245, 1);
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

    useEffect(() => {
        setpropdata(data)
    });

    return (
        <>
            {
                propdata
                ?   <div className='card-section2 animate card-subsection2-margin'>
                        <Top className='top' />
                        {/* <p>{propdata.name}</p> */}
                    </div>
                :   null
            }
        </>
    );
};

export default Section2Subsection2Item