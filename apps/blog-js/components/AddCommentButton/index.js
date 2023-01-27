import { BiCommentAdd } from 'react-icons/bi';
import ButtonClean from '../ButtonClean';
import styles from './index.module.scss';

const AddCommentButton = ({ link }) => (
  <ButtonClean className={styles.AddCommentButton}>
    <BiCommentAdd />
  </ButtonClean>
)

export default AddCommentButton;