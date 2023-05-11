import { enimeApi } from '@/lib/constant';
import { SearchResult } from '@/lib/types';
import styles from './page.module.scss';
import classNames from 'classnames';
import NextLink from 'next/link';
import AnimeCard from '@/components/anime-card';

export default async function Search({ params }) {
    const query = params.query;

    let results = await fetch(enimeApi + `/search/${encodeURIComponent(query)}?perPage=10`);

    if (!results.ok) return <div>Result not ok</div>

    const searchResult = (await results.json()) as SearchResult;
    if (!searchResult.data.length) return (
        <div className={styles["search-title"]}>No Results.</div>
    )

    return (
        <>
            <p className={styles["search-title"]}>Search Results for "{query}":</p>
            <div className={classNames(styles.animes, "grid col-auto rows-auto mt-6 mx-auto")}>
                {searchResult.data.map(anime => {
                    return (
                        <NextLink href={`/anime/${anime.slug}`}>
                            <AnimeCard anime={anime}/>
                        </NextLink>
                    )
                })}
            </div>
        </>
    )
}