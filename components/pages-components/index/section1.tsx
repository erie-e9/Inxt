import dynamic from 'next/dynamic'
import '../../../static/styles/scss/pages-style/index/section1.scss'
import ComponentLoader from '../../commons/componentloader'
import Wave from '../../commons/svgr/wave'

const DynamicSubSectionComponent11: any = dynamic(() => import('./section1-subsection1'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const Section1: React.FunctionComponent = () => {
    return (
        <div className='betweenSections'>
            <div className='section1SubsectionsContainer contentCentered displayFlex'>
                <DynamicSubSectionComponent11 />
                <Wave className='waveimg'/> 
            </div>
        </div>
    );
}

export default Section1;