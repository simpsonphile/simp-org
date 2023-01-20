import styles from './styles.module.scss';

const PhotoFramed = ({ children }) => (
  <div className={styles.PhotoFramed}>{children}</div>
)

export default PhotoFramed;