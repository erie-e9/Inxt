import * as React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { global, SLUG } from '../utils/constants'
// import { TitleH2, InxtParagraph } from '../utils/styled-components-global'
import Layout from '../components/Layout'
import '../static/styles/scss/pages-style/auth/index.scss'

// @ts-ignore
const AuthPage: NextPage = ({ data }) => {
  return (
    <Layout>
      <NextSeo
        titleTemplate={`%s | ${SLUG}`}
        title='Auth'
        noindex={false}
        description='Auth'
        canonical={`${global.COMPANYURL}/auth`}
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
            { url: global.COMPANYURL+'/og-image-03.jpg' },
            { url: global.COMPANYURL+'/og-image-04.jpg' },
          ],
          site_name: global.COMPANYURL,
        }}
        twitter={{
          handle: '@handle',
          site: global.COMPANYTWITTERACCOUNT,
          cardType: 'summary_large_image'
        }}
      />
        <div className='auth-wrapper-centered'>
          <h2 className="auth-title">About</h2>
          <p className="auth-subtitle">{data}</p>
        </div>
    </Layout>
  );
}

AuthPage.getInitialProps = async () => {
  console.log('getInitialProps')

  // const productsServices = new AuthService();
  // const data = await productsServices.getdata();
  const data: string = 'This is the auth page'

  return { data };
}

export default AuthPage
