const { SLUG, global } = require("./utils/constants");

export default {
  title: SLUG,
  noindex: true,
  description: "This example uses more of the available config options.",
  canonical: global.COMPANYURL,
  openGraph: {
        type: "website",
        locale: "en_US",
        url: global.COMPANYURL,
        title: "Open Graph Title",
        description: "Open Graph Description",
        videos: [
          {
            url: global.COMPANYURL+"/og-video-01.mp4",
            width: 800,
            height: 600,
            alt: "Og Video Alt",
          }
        ],
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
          {
            url: global.COMPANYURL+"/og-image-03.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Third", 
          },
          {
            url: global.COMPANYURL+"/og-image-04.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Four", 
          },
        ],
        site_name: SLUG,
  }
};
