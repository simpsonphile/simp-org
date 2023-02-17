import styles from './index.module.scss';

const LayoutHeader = ({ children }) => {
  return <header className={styles.LayoutHeader}>{children}</header>;
};

export default LayoutHeader;
