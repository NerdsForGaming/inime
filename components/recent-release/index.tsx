import { RecentRelease } from '@/lib/types';
import NextLink from 'next/link';
import EpisodeCard from '@/components/episode-card';

export default function RecentReleaseComponent({ data }: RecentRelease) {
    return (
        <div className="grid grid-rows-2 col-auto row-auto grid-flow-col-dense m-0 overflow-x-scroll w-full pr-5 pl-5 gap-x-3">
            {data.map(episode => {
                return (
                    <NextLink key={episode.id} href={`/watch/${episode.anime.slug}/${episode.number}`} className="p-0 m-0">
                        <EpisodeCard episode={episode}/>
                    </NextLink>
                )
            })}
        </div>
    )
}