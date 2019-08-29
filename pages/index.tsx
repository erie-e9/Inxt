import * as React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
// import Layout from "../components/Layout";
import { global, SLUG } from "../utils/constants";
import styled from "styled-components";
import { Switch } from "antd";
import Layout from "../components/Layout";

const Title = styled.h3`
  font-size: 30px;
  font-family: "Pangram", sans-serif;
  color: ${props => props.theme.PRIMARY};
`;

// @ts-ignore
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        titleTemplate={`%s | ${SLUG}`}
        title="Index"
        noindex={false}
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
            content: "index"
          }, {
            property: "dc:creator",
            content: "Eric Torres Andrade <erictorresandrade.1@gmail.com>"
          }, {
            name: "application-name",
            content: SLUG
          }, {
            name: "revisit-after",
            content: "7 days"
          },
          {
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
      <Title>Hello Next.js 👋🚀👍👽🤑💗</Title>
      <Switch onChange={onChange} />
    </Layout>
  );
};

export default IndexPage;
