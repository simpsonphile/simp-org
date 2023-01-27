import styles from './index.module.scss';
import classNames from 'classnames';

const Card = ({ as: Component = 'div', children, className, ...otherProps }) => {
  return <Component className={classNames(styles.Card, className)} {...otherProps}>{children}</Component>
}

export default Card;
