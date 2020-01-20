import dynamic from 'next/dynamic'
import ItemLoader from '../../commons/itemloader'
// import ItemLazyLoader from '../../commons/lazyloader'

const DynamicSubSectionVideoComponent31: any = dynamic(() => import('./section3-subsection1-video'),
{   ssr: false,
    loading: () => <ItemLoader />
});

const Subsection31: React.FunctionComponent = () => {
    return (
        <>
            {/* <ItemLazyLoader> */}
                <DynamicSubSectionVideoComponent31 url='https://www.youtube.com/watch?v=EMqlDoTOi_M'/>
            {/* </ItemLazyLoader> */}
        </>
    );
}

export default Subsection31