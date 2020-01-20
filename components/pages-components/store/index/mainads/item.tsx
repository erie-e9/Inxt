import { useState, useEffect } from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import { useSpring, animated } from 'react-spring'

 interface IProps {
    data: any;
}

const MainAdsItem: React.FunctionComponent<IProps> = ({ data }: any) => {
    const [ propdata, setpropdata ]: any = useState()

    useEffect(() => {
        setpropdata(data)
    });
    const minheight: number = 315
    const [ ref, inView ] = useInView({
        /* Optional options */
        rootMargin: `${minheight}px`,
        threshold: 0,
        // triggerOnce: !true
    });

    const props: any = useSpring({ 
        from: { opacity: 0 }, 
        // @ts-ignore
        to: async (next: any, cancel: any) => {
            await next({opacity: 1})
        },
        delay: 500 
    });

    return (
        <div ref={ref}
            style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            margin: 'auto',
            minHeight: minheight - 100
                // margin: 5,
                }}>
                    {
                        inView && propdata
                        ?   <animated.div style={props}>
                                <div style={{ height: minheight, width: '100%', background: `#E9E9E9 url(${isWebpSupported() ? propdata.imageWebp : propdata.image}) no-repeat center center`, backgroundSize: 'cover'}}></div>
                            </animated.div>
                        :   null
                    }
        </div>
    );

}


export default MainAdsItem;