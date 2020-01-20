import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style/css'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import 'antd/lib/icon/style/css'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style/css'
import { InxtParagraphSpan, InxtLink } from '../../../utils/styled-components-global'
import sidebarlinks from '../../../utils/sidebarlinks'
import '../../../static/styles/scss/commons/sidebar/index.scss'

const { SubMenu } = Menu;
const { Sider } = Layout;
// const padtop: number = 50;

interface IProps {
    vars: any;
}

const SiderContent: React.FunctionComponent<IProps> = (vars: any) => {
    const [ data ]: any = useState(sidebarlinks['sidebar-links']);
    const [ collapsedHook, setcollapsedHook ]: any = useState(true)
    const [ propsvars ]: any = useState(vars)

    // useEffect(() => {
    //     setData(sidebarlinks['sidebar-links'])
    // })
    
    return (
        <Sider 
            width={170}
            collapsible
            collapsed={collapsedHook}
            trigger={null}
            collapsedWidth={propsvars.vars.padleft}
            className='sider'
            theme='light'
            style={{ paddingTop: propsvars.vars.padtop }}>
            <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}>
                {
                    data
                    ?   data.map((element: any) => {
                        if (Array.isArray(element.sublinks)) {
                            return (
                                <SubMenu
                                    key={element.key}
                                    title={
                                    <span>
                                        <DynamicIcon type={element.icon} />
                                        <InxtParagraphSpan>{element.section}</InxtParagraphSpan>
                                    </span>
                                    }
                                >
                                    {
                                        element.sublinks.map((item: any) => {
                                            return (
                                                <Menu.Item key={item.key}>
                                                    <Link href={item.link} as={item.as} prefetch={item.prefetch}>
                                                        <InxtLink>
                                                            <InxtParagraphSpan>{item.section}</InxtParagraphSpan>
                                                        </InxtLink>
                                                    </Link>
                                                </Menu.Item>
                                            );
                                        })
                                    }
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item key={element.key}>
                                    <Link href={element.link} as={element.as} prefetch={element.prefetch}>
                                        <InxtLink>
                                            <DynamicIcon type={element.icon} />
                                            <InxtParagraphSpan>{element.section}</InxtParagraphSpan>
                                        </InxtLink>
                                    </Link>
                                </Menu.Item>
                            );
                        }
                    })
                    :   null
                }
                <Menu.Item key='10' onClick={() => setcollapsedHook(!collapsedHook)}>
                    <DynamicIcon
                        type={collapsedHook ? 'double-right' : 'double-left'}
                    />
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SiderContent;