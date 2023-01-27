import styles from './index.module.scss';
import Image from "next/image";
import Tags from '../Tags';
import BreadCrumbs from '../BreadCrumbs';
import Headline from '../Headline';

const PostHero = ({ title, img, readingTime, tags, date, slug}) => {
  return (
    <header className={styles.PostHero}>
      <div className={styles.PostHeroInside}>
        {date && <div>{date}</div>}
        {title && (<Headline tag="h1" className={styles.PostHeroTitle}>{title}</Headline>)}

        <BreadCrumbs slug={slug} />

        <div className={styles.PostHeroFooter}>
          {tags?.length && (
            <Tags tags={tags} />
          )}

          {readingTime && (
            <time className={styles.PostHeroReadingTime}>{readingTime} min</time>
          )}
        </div>
      </div>

      {img && (
        <Image src={img} alt={title || 'post image'} fill />
      )}
    </header>
  )
}

export default PostHero;