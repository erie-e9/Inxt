import { useState, useEffect } from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import ItemLazyLoader from '../../../../commons/lazyloader'
import '../../../../../static/styles/scss/pages-style/store/index/subbanner/index.scss'
// import ItemLoader from '../../../../commons/itemloader'
// import { InxtParagraphSpan } from '../../../../../utils/styled-components-global'

interface IProps {
    data: any;
}

const SubBannerComponent: React.FunctionComponent<IProps> = ({data}: any) => {    
    const [ propdata, setpropdata ]: any = useState()

    useEffect(() => {
        setpropdata(data[2])
    });

    return (
        <div style={{ width: '100%', height: 100, background: `#E9E9E9`, marginBottom: 20 }}>
           {
               propdata
               ?    <ItemLazyLoader>
                        <div style={{ width: '100%', height: 100, background: `#E9E9E9 url(${isWebpSupported() ? propdata['subbanner'][0].imageWebp : propdata['subbanner'][0].image}) no-repeat center center`, marginBottom: 20 }}>
                            {/* <InxtParagraphSpan>{propdata['subbanner'][0].name}</InxtParagraphSpan> */}
                        </div>
                    </ItemLazyLoader>
               :    null
           }
        </div>
    );
}

export default SubBannerComponent;