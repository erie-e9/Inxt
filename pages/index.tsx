import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { useSpring, animated } from 'react-spring'
import { global, SLUG } from '../utils/constants'
import Layout from '../components/Layout'
// import { TitleH2, InxtParagraph } from '../utils/styled-components-global'
import '../static/styles/scss/pages-style/index/index.scss'

const DynamicIndexComponent: any = dynamic(() => import('../components/pages-components/index/index'),
{ ssr: false,
  // loading: () => <ComponentLoader/>
});

const DynamicHillComponent: any = dynamic(() => import('../components/commons/hill'),
{ ssr: false,
  // loading: () => <ComponentLoader/>
});

const DynamicCallToActions: any = dynamic(() => import('../components/pages-components/index/index-calltoactions'),
{ ssr: false,
  // loading: () => <ComponentLoader/>
});

interface IProps {
  userAgent?: string;
}

// @ts-ignore
const IndexPage: NextPage<IProps> = ({ userAgent }: any) => {
  const props: any = useSpring({ 
    from: { opacity: 0 }, 
    to:   { opacity: 1 }, 
    delay: 500 
  });

  return (
    <Layout>
      <NextSeo 
        titleTemplate={`%s | ${SLUG}`}
        title='Index'
        noindex={false}
        description='Index'
        canonical={`${global.COMPANYURL}`}
        additionalMetaTags={[
          {
            name: 'X-UA-Compatible',
            content: 'IE=8; IE=9; IE=Edge'
          }, {
            name: 'keywords',
            content: 'index'
          }, {
            property: 'dc:creator',
            content: 'Eric Torres Andrade <erictorresandrade.1@gmail.com>'
          }, {
            name: 'revisit-after',
            content: '7 days'
          },
          {
            name: 'google',
            content: 'nositelinkssearchbox'
          },
        ]}
        openGraph={{
          url: global.COMPANYURL,
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          videos: [
            {
              url: global.COMPANYURL+'/og-video-01.mp4',
              width: 800,
              height: 600,
              alt: 'Og Video Alt',
            }
          ],
          images: [
            {
              url: global.COMPANYURL+'/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: global.COMPANYURL+'/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            {
              url: global.COMPANYURL+'/og-image-03.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Third'
            },
            {
              url: global.COMPANYURL+'/og-image-04.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Four'
            },
          ],
          site_name: global.COMPANYURL,
        }}
        twitter={{
          handle: '@handle',
          site: global.COMPANYTWITTERACCOUNT,
          cardType: 'summary_large_image'
        }}
      />
      <div className='index-wrapper main'>
        <animated.div className='index-wrapper-centered' style={props}>
          <h2 className="index-titleslug">{SLUG}</h2>
            <p className="index-slogan">{global.COMPANYSLOGAN}</p>
            <DynamicCallToActions />
        </animated.div>
        <DynamicHillComponent/>
      </div>
      <DynamicIndexComponent />
      {/* <DynamicSection1 />
      <DynamicSection2 />
      <DynamicSection3 />
      <DynamicSection4 /> */}
    </Layout>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const userAgent: any = req ? req.headers['user-agent'] : navigator.userAgent;
  // const wHeight: any = await window.innerHeight - 50;
  // const {
  //   wHeight,
  //   userAgent
  // } = state;
  return { userAgent };
};

export default IndexPage;
