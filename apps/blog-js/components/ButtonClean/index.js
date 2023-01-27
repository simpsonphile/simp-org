import classNames from 'classnames';
import styles from './index.module.scss';

const ButtonClean = ({className, children, ...otherProps}) => (
  <button className={classNames(styles.ButtonClean, className)} {...otherProps}>
    {children}
  </button>
);

export default ButtonClean;
