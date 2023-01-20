import styles from './styles.module.scss';
import Part from './Part';
import Actions from './Actions';

const Section = ({ children }) => (
  <section className={styles.Section}>{children}</section>
);

Section.Part = Part;
Section.Actions = Actions;

export default Section;
