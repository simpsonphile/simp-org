import styles from './index.module.scss';

const Header = ({children}) => (
  <header className={styles.Header}>{children}</header>
)

export default Header;