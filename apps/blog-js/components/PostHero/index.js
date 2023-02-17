import styles from './index.module.scss';
import Tags from '../Tags';
import BreadCrumbs from '../BreadCrumbs';
import Headline from '../Headline';
import Date from '../Date';

const PostHero = ({ title, readingTime, tags, date, slug }) => {
  return (
    <header className={styles.PostHero}>
      {date && <Date>{date}</Date>}
      {title && (
        <Headline tag="h1" size="xl" className={styles.PostHeroTitle}>
          {title}
        </Headline>
      )}

      <BreadCrumbs slug={slug} />

      <div className={styles.PostHeroFooter}>
        {tags?.length && <Tags tags={tags} />}

        {readingTime && (
          <Headline size="xs" tag="time" className={styles.PostHeroReadingTime}>
            {readingTime} min to read
          </Headline>
        )}
      </div>
    </header>
  );
};

export default PostHero;
