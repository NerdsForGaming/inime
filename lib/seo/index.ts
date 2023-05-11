import type { NextSeoProps } from 'next-seo';

export const DEFAULT_SEO_PROPS: NextSeoProps = {
    title: "Home",
    description: "An anime streaming website that is made specifically for the PureReader project.",
    titleTemplate: "%s | Inime",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "",
        title: "Inime",
        description: "An anime streaming website that is made specifically for the PureReader project.",
        siteName: "Inime",
    },
    twitter: {
        cardType: "summary_large_image"
    }
};