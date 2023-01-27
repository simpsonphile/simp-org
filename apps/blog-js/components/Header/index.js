import styles from './index.module.scss';

const Header = ({children}) => (
  <div className={styles.Header}>{children}</div>
)

export default Header;