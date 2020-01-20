import { useState } from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
// import { Layout } from 'antd'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style/css'
import NProgress from 'nprogress'
import HeaderItems from './header-content'
// import SidebarContent from '../sidebar/sidebar-content'
import '../../../static/styles/scss/commons/ngprogress/index.scss'

const { Content } = Layout;
const DynamicSidebarContent: any = dynamic(() => import('../sidebar/sidebar-content'),
{ ssr: false,
// loading: () => <ComponentLoader/>
});

Router.events.on('routeChangeStart', ( ) => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface IProps {
  childrennav: any;
}

const Navbar: React.FunctionComponent<IProps> = ({ childrennav }) => {
  
  const [ logged ]: any = useState(!true)
  const [ vars ]: any = useState({padtop: 40, padleft: 40})

  return (
    <Layout>
      {
        logged
        ? <DynamicSidebarContent vars={vars} />
        : null
      }
      <Layout>
        <HeaderItems /> 
          <Content 
          style={{ marginTop: vars.padtop, paddingLeft: logged ? vars.padleft : 0 }} 
          >
            {childrennav}
          </Content>
      </Layout>
    </Layout>
  );
}

export default Navbar