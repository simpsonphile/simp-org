import Link from 'next/link';
import styles from './index.module.scss';

const Logo = () => (
  <p className={styles.Logo}>
    <Link href="/">noidea</Link>
  </p>
);
export default Logo;
