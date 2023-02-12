import styles from './index.module.scss';

const ModalInner = ({ children }) => (
  <div className={styles.ModalInner}>{children}</div>
)

export default ModalInner;