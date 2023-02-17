import Link from 'next/link';
import Tags from '../Tags';
import styles from './index.module.scss';
import Date from '../Date';

const PostList = ({ docs }) => {
  return (
    <ul className={styles.PostList}>
      {docs.map(({ path, metadata }) => (
        <li key={path}>
          {metadata.date && (
            <>
              <Date>{metadata.date}</Date> -{' '}
            </>
          )}
          <Link href={'/' + path}>{path}</Link>
          {metadata?.tags?.length && <Tags tags={metadata.tags} />}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
