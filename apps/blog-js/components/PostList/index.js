import Link from 'next/link';
import Tags from '../Tags';
import Headline from '../Headline';
import styles from './index.module.scss';

const PostList = ({ docs }) => {
  return (
    <ul className={styles.PostList}>
      {docs.map(({ path, metadata }) => (
        <li key={path}>
          <Link href={path}>{path}</Link>
          {metadata?.tags?.length && <Tags tags={metadata.tags} />}
          {metadata.date && (
            <Headline tag="p" size="xxxs">
              {metadata.date}
            </Headline>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
