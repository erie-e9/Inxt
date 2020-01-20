import styled from "styled-components";
// import { inxtFontSizes } from "./constants";
import dynamic from 'next/dynamic'
const DynamicIcon: any = dynamic(() => import('antd/lib/icon'))
// import Icon from "antd/lib/icon";

// const IconFont: any = Icon.createFromIconfontCN({
//     scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
// });

const sizeIcons: number = 23;

const HeartSvg: any = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

// @ts-ignore
export const HeartIcon: any = props => <DynamicIcon component={HeartSvg} {...props} />;

const PandaSvg: any = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path
        d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
        fill="#6B676E"
        p-id="1143"
      />
      <path
        d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
        fill="#FFEBD2"
        p-id="1144"
      />
      <path
        d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
        fill="#E9D7C3"
        p-id="1145"
      />
      <path
        d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
        fill="#FFFFFF"
        p-id="1146"
      />
      <path
        d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
        fill="#6B676E"
        p-id="1147"
      />
      <path
        d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
        fill="#464655"
        p-id="1148"
      />
      <path
        d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
        fill="#464655"
        p-id="1149"
      />
      <path
        d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
        fill="#464655"
        p-id="1150"
      />
    </svg>
);

//   @ts-ignore
export const PandaIcon: any = props => <DynamicIcon component={PandaSvg} {...props} />;

// @ts-ignore
const Logo: any = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18.5" viewBox="0 0 16 18.5"><g transform="translate(-667 -670)"><path d="M13.875,0,18.5,8l-4.625,8H4.625L0,8,4.625,0Z" transform="translate(683 670) rotate(90)" fill="#cfcfcf"/><path d="M9.375,0,12.5,5.405,9.375,10.811H3.125L0,5.405,3.125,0Z" transform="translate(680.411 673) rotate(90)" fill="#565151"/></g></svg>)
// @ts-ignore
export const LogoIcon: any = props => <DynamicIcon component={Logo} {...props} />;

// @ts-ignore
const LogoInverted: any = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18.5" viewBox="0 0 16 18.5"><g transform="translate(-667 -670)"><path d="M13.875,0,18.5,8l-4.625,8H4.625L0,8,4.625,0Z" transform="translate(683 670) rotate(90)" fill="#565151"/><path d="M9.375,0,12.5,5.405,9.375,10.811H3.125L0,5.405,3.125,0Z" transform="translate(680.411 673) rotate(90)" fill="#cfcfcf"/></g></svg>)
// @ts-ignore
export const LogoInvertedIcon: any = props => <DynamicIcon component={LogoInverted} {...props} />;

// @ts-ignore
// export const IconTuichu: any = props => <IconFont type="icon-tuichu" />;


// // @ts-ignore
// export const IconFacebook: any = props => <IconFont type="icon-facebook" />;
// // @ts-ignore
// export const IconTwitter: any = props => <IconFont type="icon-twitter" />;

const Delivery: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/delivery-green.svg"/>)
// @ts-ignore
export const DeliveryIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Delivery} {...props} />;


// Apps
// @ts-ignore

const MercadoLibre: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/instagram.svg"/>)
// @ts-ignore
export const MercadoLibreIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={MercadoLibre} {...props} />;

const Facebook: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/facebook.svg"/>)
// @ts-ignore
export const FacebookIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Facebook} {...props} />;

const Instagram: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/instagram.svg"/>)
// @ts-ignore
export const InstagramIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Instagram} {...props} />;

const Messenger: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/messenger.svg"/>)
// @ts-ignore
export const MessengerIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Messenger} {...props} />;

const WhatsApp: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/whatsapp.svg"/>)
// @ts-ignore
export const WhatsAppIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={WhatsApp} {...props} />;

const Youtube: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/youtube.svg"/>)
// @ts-ignore
export const YoutubeIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Youtube} {...props} />;

const Twitter: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/twitter.svg"/>)
// @ts-ignore
export const TwitterIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Twitter} {...props} />;

const Skype: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/skype.svg"/>)
// @ts-ignore
export const SkypeIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Skype} {...props} />;

const Snapchat: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/snapchat.svg"/>)
// @ts-ignore
export const SnapchatIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Snapchat} {...props} />;

const PayPal: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/paypal.svg"/>)
// @ts-ignore
export const PayPalIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={PayPal} {...props} />;

const Shopify: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/shopify.svg"/>)
// @ts-ignore
export const ShopifyIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Shopify} {...props} />;

const Amazon: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/amazon.svg"/>)
// @ts-ignore
export const AmazonIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Amazon} {...props} />;

const Pinterest: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/pinterest.svg"/>)
// @ts-ignore
export const PinterestIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Pinterest} {...props} />;

const Ebay: any = () => (<img style={{ width: sizeIcons + 7, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/ebay.svg"/>)
// @ts-ignore
export const EbayIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Ebay} {...props} />;

const Mercadolibre: any = () => (<img style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} src="/static/images/socialnetworkicons/mercadolibre.svg"/>)
// @ts-ignore
export const MercadolibreIcon: any = props => <DynamicIcon style={{ width: sizeIcons, height: sizeIcons, fontSize: sizeIcons }} component={Mercadolibre} {...props} />;
// /Apps



export const TitleH1: any = styled.h2`
  font-family: ${props => props.theme.FONTSANS};
  // font-display: fallback;
  color: ${props => props.theme.PRIMARY};
  font-size: 4rem;
  font-weight: 500;
  // text-align: center;
`;
export const TitleH2: any = styled.h2`
  font-family: ${props => props.theme.FONTSANS};
  // font-display: fallback;
  color: ${props => props.theme.PRIMARY};
  font-size: 3rem;
  font-weight: 500;
  // text-align: center;
`;
export const TitleH3: any = styled.h3`
  font-family: ${props => props.theme.FONTSANS};
  // font-display: fallback;
  color: ${props => props.theme.PRIMARY};
  font-size: 2rem;
  font-weight: 600;
  // text-align: center;
`;
export const TitleH4: any = styled.h4`
  font-family: ${props => props.theme.FONTSANS};
  // font-display: fallback;
  color: ${props => props.theme.PRIMARY};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5;
`;
export const TitleH5: any = styled.h5`
  font-family: ${props => props.theme.FONTSANS};
  // font-display: fallback;
  color: ${props => props.theme.PRIMARY};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.5;
`;
export const InxtParagraph: any = styled.p`
  font-family: ${props => props.theme.FONTSANS};
  color: ${props => props.theme.PRIMARY};
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  line-height: 2.5;
`;
export const InxtParagraphSpan: any = styled.span`
  font-family: ${props => props.theme.FONTSANS};
  color: ${props => props.theme.PRIMARY};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;
export const InxtLink: any = styled.a`
  font-family: ${props => props.theme.FONTSANS};
  color: ${props => props.theme.PRIMARY} !important;
  font-size: 1rem;
  font-weight: 300;
`;
export const InxtLinkLineHeight: any = styled.a`
  font-family: ${props => props.theme.FONTSANS};
  color: ${props => props.theme.PRIMARY} !important;
  line-height: 1.82;
  padding: 4.3px 0;
  font-size: 1.55rem;
  font-weight: 300;
`;