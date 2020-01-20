import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
// import Banner from './banner'
// import MainAds from './mainads'
// import SubBanner from './subbanner'
// import SubAds from './subads'
// import SectionComponent from './section'
import storedata from '../../../../utils/storedata'
import ItemLoader from '../../../commons/itemloader'
import ItemLazyLoader from '../../../commons/lazyloader'

const DynamicBanner: any = dynamic(() => import('./banner'),
{   ssr: false,
    // loading: () => <ItemLoader />
});

const DynamicMainAds: any = dynamic(() => import('./mainads'),
{   ssr: false,
    loading: () => <ItemLoader />
});

const DynamicSubBanner: any = dynamic(() => import('./subbanner'),
{   ssr: false,
    loading: () => <ItemLoader />
});

const DynamicSubAds: any = dynamic(() => import('./subads'),
{   ssr: false,
    loading: () => <ItemLoader />
});

const DynamicSectionComponent: any = dynamic(() => import('./section'),
{   ssr: false,
    loading: () => <ItemLoader />
});

interface IProps {
 
}

const IndexComponent: React.FunctionComponent<IProps> = () => {
    const [ data, setdata ]: any = useState();
    // const subadsstyle: any = useSpring({ from: {  }, to: {  } })

    useEffect(() => {
        setdata(storedata['data'])
    });

    return (
        <>
            {
                data
                ?   <ItemLazyLoader>
                        <div className='index-store'>
                            <DynamicBanner data={data} />
                            <DynamicMainAds data={data} />
                            <DynamicSubBanner data={data} />
                            <DynamicSubAds data={data} />
                        </div>
                        <DynamicSectionComponent data={data} />
                    </ItemLazyLoader>
                :   null
            }
        </>
    )
}

export default IndexComponent;