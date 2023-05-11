import { Anime } from '@/lib/types';
import { title } from '@/lib/helper';
import classNames from 'classnames';
import styles from './index.module.scss';

export default function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <div className="cursor-pointer ms-5 mb-6 ml-3" style={{ width: "20rem;" }}>
            <div className={classNames(styles["anime-image"], "bg-cover bg-center rounded-md mb-4")} style={{ backgroundImage: `url(${anime.coverImage})`}}>
        </div>
            <p className={classNames(`text-overflow p-0 text-white`, styles["anime-title"])}>{ title(anime.title) }</p>
            <p className="text-tertiary text-sm">{ anime.status } • { anime.currentEpisode } Episodes</p>
        </div>
    )
}