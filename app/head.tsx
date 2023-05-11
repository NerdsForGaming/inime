import { DEFAULT_SEO_PROPS } from '@/lib/seo';
import { NextSeo } from 'next-seo';
import { enimeApi } from '@/lib/constant';

export default async function Head() {
    const { data, meta } = await (await fetch(enimeApi + "/recent?perPage=100", { next: { revalidate: 600 }})).json();

    return <>
        <meta name="clckd" content="d77390e787115970577feb086c8d81cd" />
        <NextSeo
            useAppDir
            {...DEFAULT_SEO_PROPS}
        />
    </>
}