interface IMetatags {
    name?: string;
    content?: string;
}

interface IOpenGraphImages {
    url?: string;
    width?: number;
    height?: number;
    alt?: string;
}

interface IOpenGraphVideos {
    url?: string;
    width?: number;
    height?: number;
    alt?: string;
}

interface IOpenGraph {
    type?: string;
    locale?: string;
    url?: string;
    title?: string;
    description?: string;
    images?: IOpenGraphImages[];
    videos?: IOpenGraphVideos[];
    site_name?: string;
}

export interface ISEO {
    title?: string;
    noindex?: boolean;
    description?: string;
    canonical?: string;
    MetaTags?: IMetatags[];
    OpenGraph?: IOpenGraph;
}