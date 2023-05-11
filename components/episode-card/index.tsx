import { Episode } from '@/lib/types';
import { title as animetitle } from '@/lib/helper';
import classNames from 'classnames';
import styles from './index.module.scss';

export default function EpisodeCard(props) {
    const { anime, number, title } = props.episode as Episode;

    return (
        <div className="cursor-pointer ms-5 mb-6" style={{ width: "11rem" }}>
            <div className={classNames(styles["anime-image"], "bg-cover bg-center rounded-md mb-3")}
                 style={{ backgroundImage: `url(${anime.coverImage})` }}/>
            <p className="text-sm text-tertiary text-overflow"><>EP{ number }{title && <span>: { title }</span>}</></p>
            <p className={classNames(styles["anime-title"], "text-overflow p-0 text-white")}>{ animetitle(anime.title) }</p>
        </div>
    )
}