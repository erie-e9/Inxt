import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import Navbar from '../components/commons/navbar'
// import Footer from '../components/commons/footer'
import ComponentLoader from './commons/componentloader'

const DynamicNavbar: any = dynamic(() => import('../components/commons/navbar'),
{   ssr: false,
    // loading: () => <ComponentLoader/>
});

const DynamicFooter: any = dynamic(() => import('../components/commons/footer'),
{   ssr: false,
    loading: () => <ComponentLoader/>
});


type Props = {

};

const Layout: React.FunctionComponent<Props> = ({children}) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <link rel='manifest' href='static/manifest.json' />
      <meta httpEquiv='cache-control' content='no-cache' />
      <meta name='viewport' content='initial-scale=1, width=device-width, height=device-height, minimal-ui' />
      <meta httpEquiv='expires' content='43200' />
      {/* icons */}
      <link rel='icon' type='image/png' sizes='32x32' href='/static/images/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/images/icons/favicon-16x16.png' />
      <link rel='manifest' href='/static/images/icons/site.webmanifest' />
      <link rel='mask-icon' href='/static/images/icons/safari-pinned-tab.svg' color='#999999' />
      <link rel='icon' type='image/x-icon' href='/static/images/icons/favicon.ico' />
      <link rel='shortcut icon' href='/static/images/icons/favicon.ico' />
      <meta name='apple-mobile-web-app-title' content='Inxt' />
      <meta name='application-name' content='Inxt' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/static/images/icons/mstile-144x144.png' />
      <meta name='msapplication-config' content='/static/images/icons/browserconfig.xml' />
      <meta name='theme-color' content='transparent' />
      {/* Apple */}
      <link rel='apple-touch-icon' sizes='16x16' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/16.png' />
      <link rel='apple-touch-icon' sizes='20x20' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/20.png' />
      <link rel='apple-touch-icon' sizes='29x29' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/29.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/32.png' />
      <link rel='apple-touch-icon' sizes='40x40' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/40.png' />
      <link rel='apple-touch-icon' sizes='50x50' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/50.png' />
      <link rel='apple-touch-icon' sizes='55x55' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/55.png' />
      <link rel='apple-touch-icon' sizes='57x57' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/57.png' />
      <link rel='apple-touch-icon' sizes='58x58' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/58.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/60.png' />
      <link rel='apple-touch-icon' sizes='64x64' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/64.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/76.png' />
      <link rel='apple-touch-icon' sizes='80x80' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/80.png' />
      <link rel='apple-touch-icon' sizes='87x87' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/87.png' />
      <link rel='apple-touch-icon' sizes='88x88' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/88.png' />
      <link rel='apple-touch-icon' sizes='100x100' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/100.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/120.png' />
      <link rel='apple-touch-icon' sizes='128x128' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/128.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/152.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/167.png' />
      <link rel='apple-touch-icon' sizes='172x172' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/172.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/180.png' />
      <link rel='apple-touch-icon' sizes='196x196' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/196.png' />
      <link rel='apple-touch-icon' sizes='216x216' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/216.png' />
      <link rel='apple-touch-icon' sizes='256x256' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/256.png' />
      <link rel='apple-touch-icon' sizes='512x512' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/512.png' />
      <link rel='apple-touch-icon' sizes='1024x1024' href='/static/images/icons/Assets.xcassets/AppIcon.appiconset/1024.png' />
    </Head>
    <DynamicNavbar childrennav={children} />
    <DynamicFooter />
  </>
);

export default Layout