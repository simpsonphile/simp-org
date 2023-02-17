import styles from './index.module.scss';
import Link from 'next/link';

const Tag = ({ children }) => {
  return (
    <Link className={styles.Tag} href={`/tags/${children}`}>
      {children}
    </Link>
  );
};

export default Tag;
