import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import { 
    // Layout, 
    // Menu, 
    // Switch, 
    // Input, 
    // Badge 
// } from 'antd'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style/css'
import Menu from 'antd/lib/menu'
import Input from 'antd/lib/input'
import 'antd/lib/input/style/css'
import headerLinks from '../../../utils/headerlinks'
import { global } from '../../../utils/constants'
import { LogoIcon, LogoInvertedIcon, 
    // InxtParagraphSpan,
    InxtLink } from '../../../utils/styled-components-global'
    import '../../../static/styles/scss/commons/navbar/header-content.scss'
    
const DynamicSwitch: any = dynamic(() => import('antd/lib/switch'))
    import 'antd/lib/switch/style/css'
    
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
import 'antd/lib/icon/style/css'

const DynamicBadge: any = dynamic(() => import('antd/lib/badge'))
import 'antd/lib/badge/style/css'

const { Header } = Layout;
const { SubMenu } = Menu;

const _onSearch = (value: any): void  => {
    console.log('onSearch: ', value);
}

const HeaderItems: React.FunctionComponent = () => {
    const [ data ]: any = useState(headerLinks['sections-links']);
    const [ iconHeader, seticonHeader ]: any = useState(true)
    const [ iconSearch, seticonSearch ]: any = useState(false)
    
    return (
        <>
            {/* <Layout style={{ width: '100%' }}> */}
                <Header style={{ padding: '0 20px 0 20px'}}>
                    <div className='header-menus'>
                        <Menu
                            theme='light'
                            mode='horizontal'
                            className='headerNavbar'
                            // defaultSelectedKeys={['index']}
                            style={{ borderBottomWidth: 0 }}
                            >
                            <Menu.Item key='index'>
                                <Link href='/' as='/'>
                                    <InxtLink onClick={() => seticonHeader(!iconHeader)}>
                                    {
                                        iconHeader
                                        ?   <LogoIcon />
                                        :   <LogoInvertedIcon />
                                    }
                                    <span>{global.COMPANYNAME}</span>
                                    </InxtLink>
                                </Link>
                            </Menu.Item>
                            {
                                data 
                                // @ts-ignore
                                ?   data.map(element => {
                                    return (
                                        <Menu.Item key={element.key}>
                                            <Link href={element.link} as={element.as} prefetch={element.prefetch}>
                                                <InxtLink><span>{element.section}</span></InxtLink>
                                            </Link>
                                        </Menu.Item>
                                    );
                                })
                                :   null
                            }
                        </Menu>
                        
                        {/* Right menu */}
                        <Menu
                            theme='light'
                            mode='horizontal'
                            className='headerNavbar'>
                            <Menu.Item key='search'>
                                {
                                    iconSearch 
                                    ?   <>
                                            <Input.Search id='searchInput' placeholder='Search' size='small'
                                                onSearch={() => _onSearch('ewe')} aria-label='searchInput' style={{width: 220}}/>
                                            <DynamicIcon type='close' onClick={() => seticonSearch(!iconSearch)}/>
                                        </>
                                    :   <DynamicIcon type='search' onClick={() => seticonSearch(!iconSearch)} />
                                }
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span>
                                        <DynamicIcon type='global' />
                                    </span>
                                }
                                >
                                <Menu.Item key='setting:1'><span>English</span></Menu.Item>
                                <Menu.Item key='setting:2'><span>Español</span></Menu.Item>
                                <Menu.Item key='setting:3'><span>Français</span></Menu.Item>
                                <Menu.Item key='setting:4'><span>Deutsch</span></Menu.Item>
                                <Menu.Item key='setting:5'><span>Português</span></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key='shopping-cart'
                                title={
                                    <span>
                                        <DynamicBadge
                                            className='headerIcons'
                                            count={0}
                                        >
                                            <DynamicIcon type='shopping-cart'/>
                                        </DynamicBadge>
                                    </span>
                                } >
                                <Menu.Item>No items yet</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key='notifications'
                                title={
                                    <span>
                                        <DynamicBadge
                                            className='headerIcons'
                                            count={3}
                                        >
                                        <DynamicIcon type='bell'/>
                                        </DynamicBadge>
                                    </span>
                                } >
                                <Menu.Item>No notifications yet</Menu.Item>
                            </SubMenu>
                            <SubMenu key='avatar'
                                title={
                                <span>
                                    {/* <Avatar
                                        icon='user'
                                        size='small'
                                        // shape='circle'
                                        alt='User of Inxt'
                                    // src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                    // className='headerIcons'>U
                                    >
                                    </Avatar> */}
                                    <DynamicIcon type='user'/>
                                </span>
                                }>
                                <Menu.Item key='darkmode'>
                                    <span>Dark mode </span>
                                    <DynamicSwitch
                                        // checkedChildren='Off'
                                        // unCheckedChildren='On'
                                        defaultChecked
                                    />
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Header>
            {/* </Layout> */}
        </>
    );
}

export default HeaderItems