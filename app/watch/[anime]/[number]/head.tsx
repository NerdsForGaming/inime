import { enimeApi } from '@/lib/constant';
import { title } from '@/lib/helper';
import { DEFAULT_SEO_PROPS } from '@/lib/seo';
import { NextSeo, NextSeoProps } from 'next-seo';

export default async function Head({ params }) {
    if (!params.anime || !params.number) return <></>

    const episode = await (await fetch(enimeApi + `/view/${params.anime}/${params.number}`, { next: { revalidate: 600 }})).json();
    if (episode.message) return <></>

    const meta: NextSeoProps = {
        ...DEFAULT_SEO_PROPS,
        title: `Episode ${ episode.number } ${ episode.title ? `- ${episode.title}` : "" } | ${ title(episode.anime.title) }`,
        description: episode.description ?? "This episode does not have a description yet.",
        ...(episode.image && {
            openGraph: {
                images: [
                    {
                        url: episode.image
                    }
                ]
            }
        })
    }

    return <>
        <NextSeo {...meta} useAppDir/>
    </>
}