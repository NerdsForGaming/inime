import dayjs from 'dayjs';
import classNames from 'classnames';
import styles from './index.module.scss';
import relativeTime from 'dayjs/plugin/relativeTime';
import timeZone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime)
dayjs.extend(timeZone)
dayjs.extend(utc)

export default function EpisodeListItem(props) {
    const { image, number, airedAt, createdAt, anime, title } = props.episode;

    return (
        <>
            <div style={{ backgroundImage: `url(${image ? 'https://images.weserv.nl/?url=' + image : anime?.coverImage})` }} className={classNames(styles.epimage, "w-full aspect-video bg-center bg-cover")}>
            </div>
            <p className={classNames(styles.eptext, "text-overflow")}>Episode { number }{title && <span>: {
                title
            }</span>}</p>
            <p className="text-tertiary text-[0.875rem] mb-1 m-0">Released {dayjs(airedAt || createdAt).tz("Asia/Tokyo", true).fromNow()}</p>
        </>
    )
}