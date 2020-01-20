import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import { useSpring, animated } from 'react-spring'
import ItemLoader from '../itemloader'

interface IProps {
  propclassName?: any;
  proprootMargin?: number;
}

const ItemLazyLoader: React.FunctionComponent<IProps> = ({ children, propclassName, proprootMargin = 0 }: any) => {
  // const THRESHOLD = [0.25, 0.5, 0.75];
  // @ts-ignore
  const [ ref, inView, entry ] = useInView({
    threshold: 0,
    rootMargin: `${proprootMargin}px`
  });

  // @ts-ignore
  const props: any = useSpring({ 
    from: { opacity: 0 }, 
    to:   { opacity: 1 }, 
    // delay: 500 
  });

  const Loading: any = (props: any) => {
      if (props.error) {
        return <div>Something went wrong! <button onClick={ props.retry }>Retry</button></div>;
      } else if (props.timedOut) {
        return <div>Seems like your net is slow... <button onClick={ props.retry }>Retry</button></div>;
      } else if (props.pastDelay) {
        return <ItemLoader />;
      } else {
        return null;
      }
  }

  return (
    <div ref={ref} className={propclassName}>
      {
        inView
        ? <animated.div style={props}>{children}</animated.div>
        // ? <div>{children}</div>
        : <Loading />
        
      }
    </div>
  );
}

export default ItemLazyLoader;