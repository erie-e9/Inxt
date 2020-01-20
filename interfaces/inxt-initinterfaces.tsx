export interface InxtSidebarNavSubitem {
    key: string;
    section: string;
    link: string;
    as: string;
    icon?: string;
    prefetch?: boolean;
}

export interface InxtSidebarNavLink {
    key: string;
    section: string;
    link: string;
    as: string;
    icon?: string;
    prefetch?: boolean;
    sublinks?: InxtSidebarNavSubitem[];
}

export interface InxtAppGridSubItems {
    key: string;
    section: string;
    link: string;
    as: string;
    icon?: string;
    available: boolean;
    prefetch?: boolean;
}

export interface InxtAppGridItems {
    key: string;
    section: string;
    link: string;
    as: string;
    icon?: string;
    prefetch?: boolean;
    available: boolean;
    sublinks?: InxtAppGridSubItems[];
}