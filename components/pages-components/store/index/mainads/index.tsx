import { useState } from 'react'
import MainAdsItem from './item'
import '../../../../../static/styles/scss/pages-style/store/index/mainads/index.scss'

interface IProps {
    data: any;
}

const MainAdsComponent: React.FunctionComponent<IProps> = ({ data }: any) => {
    const [ propdata ] = useState(data[0]);

    return (
        <div style={{  height: 315, width: '100%', minHeight: 315, background: '#E9E9E9', marginBottom: 20 }}>
            {
                propdata
                ?   <>
                        <MainAdsItem data={propdata['ads'][0]}/>
                    </>
                :   null
            }
        </div>
    )
}

export default MainAdsComponent