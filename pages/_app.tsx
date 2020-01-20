import App from 'next/app'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import { colorsthemeone } from '../utils/constants'
import { ThemeProvider } from 'styled-components'
import { ISEO } from '../interfaces/next-seo'
import SEO from '../next-seo.config'
import '../static/styles/scss/commons/main/index.scss'

interface IProps {

}

export default class MyApp extends App<IProps> {
    public configSeo: ISEO;
    // @ts-ignore
    constructor(props: IProps) {
        // @ts-ignore
        super(props);
        this.configSeo = SEO;
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props;
        return (
        <>
            {/* Here we call NextSeo and pass our default configuration to it  */}
            <DefaultSeo {...this.configSeo}/>
            <ThemeProvider theme={colorsthemeone}>
            <Component {...pageProps} />
            </ThemeProvider>
        </>
        );
    }
}
