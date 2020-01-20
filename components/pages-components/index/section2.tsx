import { useState, useEffect } from 'react'
import SubsectionComponent21 from './section2-subsection1'
import SubsectionComponent22 from './section2-subsection2'
import '../../../static/styles/scss/pages-style/index/section2.scss'
import specialss from '../../../utils/specials'

const Section2: React.FunctionComponent = () => {
    const [ data, setdata ]: any = useState();

    useEffect(() => {
        setdata(specialss)
    });

    return (
        data
        ?   <div className='betweenSections' >
                {/* <ItemLazyLoader> */}
                    <div className='section2SubsectionsContainer'>
                        <SubsectionComponent21 data={data}/>
                    </div>
                    <div className='section2SubsectionsContainer contentCentered displayFlex'>
                        <SubsectionComponent22 />
                    </div>
                {/* </ItemLazyLoader> */}
            </div>
        :   null
    );
}

export default Section2