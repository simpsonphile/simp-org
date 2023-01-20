// import Logo from '../Logo';
import styles from './styles.module.scss';

const Header = ({ children }) => (
  <header className={styles.Header}>{children}</header>
);

export default Header;
