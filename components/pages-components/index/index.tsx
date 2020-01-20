import ItemLazyLoader from '../../commons/lazyloader'
import Section1 from './section1'
import Section2 from './section2'
// import Section3 from './section3'
import Section4 from './section4'

const IndexComponent: React.FunctionComponent = () => {
    return (
        <>
            <ItemLazyLoader >
                <Section1 />
                <Section2 />
                {/* <Section3 /> */}
                <Section4 />
            </ItemLazyLoader>
        </>
    )
}

export default IndexComponent