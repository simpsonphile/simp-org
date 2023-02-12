import RCModal from 'react-modal';
import classNames from 'classnames';
import styles from './index.module.scss';
import ButtonClean from '../ButtonClean';
import { BiSquare } from 'react-icons/bi';
import ModalInner from './ModalInner';

const Modal = ({ className, children, ...otherProps }) => (
  <RCModal className={classNames(styles.Modal, className)} {...otherProps}>
    <ButtonClean>
      <BiSquare />
    </ButtonClean>
    {children}
  </RCModal>
);

Modal.Inner = ModalInner;

export default Modal;
