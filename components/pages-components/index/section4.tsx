import dynamic from 'next/dynamic'
// import '../../../static/styles/index.scss'
import '../../../static/styles/scss/pages-style/index/section4.scss'
import ComponentLoader from '../../commons/componentloader'

const DynamicSubSectionComponent41: any = dynamic(() => import('./section4-subsection1'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const Section4: React.FunctionComponent = () => {
    return (
        <div className='betweenSections'>
            <div className='section4SubsectionsContainer contentCentered displayFlex'>
                <DynamicSubSectionComponent41 />
            </div>
        </div>
    );
}

export default Section4