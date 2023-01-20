import styles from './styles.module.scss';

const Part = ({ children }) => (
  <div className={styles.SectionPart}>{children}</div>
);

export default Part;
