import dynamic from 'next/dynamic'
import '../../../static/styles/scss/pages-style/index/section3.scss'
import ComponentLoader from '../../commons/componentloader'

const DynamicSubSectionComponent31: any = dynamic(() => import('./section3-subsection1'),
{   ssr: false,
    loading: () => <ComponentLoader />
});

const Section3: React.FunctionComponent = () => {
    return (
        <div className='betweenSections'>
            <div className='section3SubsectionsContainer contentCentered'>
                <DynamicSubSectionComponent31 />
            </div>
        </div>
    );
}

export default Section3