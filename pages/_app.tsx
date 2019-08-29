import App from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import { global, SLUG, colorsthemeone } from "../utils/constants";
import { ThemeProvider } from "styled-components";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
        <div>
            {/* Here we call NextSeo and pass our default configuration to it  */}
            <DefaultSeo
                title={`${SLUG}`}
                noindex={true}
                description="This example uses more of the available config options."
                canonical={`${global.COMPANYURL}`}
                additionalMetaTags={[
                {
                    name: "X-UA-Compatible",
                    content: "IE=8; IE=9; IE=Edge"
                }, {
                    name: "msapplication-TileColor",
                    content: "#ffffff"
                }, {
                    name: "msapplication-TileImage",
                    content: "/ms-icon-144x144.png"
                }, {
                    name: "theme-color",
                    content: "#ffffff"
                }, {
                    name: "keywords",
                    content: ""
                }, {
                    property: "dc:creator",
                    content: "Eric Torres Andrade <erictorresandrade.1@gmail.com>"
                }, {
                    name: "application-name",
                    content: SLUG
                }, {
                    name: "revisit-after",
                    content: "7 days"
                }, {
                    name: "google",
                    content: "nositelinkssearchbox"
                },
                ]}
                openGraph={{
                url: global.COMPANYURL,
                title: "Open Graph Title",
                description: "Open Graph Description",
                images: [
                    {
                    url: global.COMPANYURL+"/og-image-01.jpg",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    },
                    {
                    url: global.COMPANYURL+"/og-image-02.jpg",
                    width: 900,
                    height: 800,
                    alt: "Og Image Alt Second",
                    },
                    { url: global.COMPANYURL+"/og-image-03.jpg" },
                    { url: global.COMPANYURL+"/og-image-04.jpg" },
                ],
                site_name: global.COMPANYURL,
                }}
                twitter={{
                handle: "@handle",
                site: global.COMPANYTWITTERACCOUNT,
                cardType: "summary_large_image"
                }}
            />
            <ThemeProvider theme={colorsthemeone}>
            <Component {...pageProps} />
            </ThemeProvider>
        </div>
        );
    }
}
