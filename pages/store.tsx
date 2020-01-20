import { NextPage } from 'next'
// import '../static/styles/index.scss'
import '../static/styles/scss/pages-style/store/index.scss'
import Layout from '../components/Layout'
import Index from '../components/pages-components/store/index'
import { NextSeo } from 'next-seo'
import { global, SLUG } from '../utils/constants'
// import { StoreService } from '../../../../services/ecommerce/products/product-service'

{/* <Layout><Store propdata={propdata}></Store></Layout>; */}
// @ts-ignore
const StorePage: NextPage = ({ propdata }) => {
    return (
        <>
            <Layout>
                <NextSeo
                    titleTemplate={`%s | ${SLUG}`}
                    title='Store'
                    noindex={false}
                    description='Store'
                    canonical={`${global.COMPANYURL}/store`}
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
                <Index />
            </Layout>
        </>
    )
}

StorePage.getInitialProps = async () => {
    // console.log('getInitialProps')

    // const productsServices = new StoreService();
    // const models = await productsServices.getModels();
   
    const propdata: string = ''
    return { propdata };
}

export default StorePage