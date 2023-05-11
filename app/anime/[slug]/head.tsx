import { enimeApi } from '@/lib/constant';
import { NextSeo, NextSeoProps } from 'next-seo';
import { DEFAULT_SEO_PROPS } from '@/lib/seo';
import { title } from '@/lib/helper';

export default async function Head({ params }) {
    const response = await (await fetch(enimeApi + `/anime/${params.slug}`, { next: { revalidate: 60 }})).json();

    if (response?.statusCode === 404) return <></>

    const { bannerImage, coverImage, title: animeTitle, description } = response;

    const meta: NextSeoProps = {
        ...DEFAULT_SEO_PROPS,
        title: title(animeTitle),
        description: description,
        openGraph: {
            ...((bannerImage || coverImage) && {
                images: [{
                    url: bannerImage || coverImage
                }]
            })
        }
    }

    return (
        <>
            <NextSeo useAppDir {...meta}/>
        </>
    )
}