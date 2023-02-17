import { BiCommentAdd } from 'react-icons/bi';
import ButtonClean from '../ButtonClean';
import styles from './index.module.scss';

const AddCommentButton = () => (
  <ButtonClean className={styles.AddCommentButton} aria-label="add comment">
    <BiCommentAdd size={32} />
  </ButtonClean>
);

export default AddCommentButton;
