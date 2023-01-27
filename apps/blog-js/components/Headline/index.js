import classNames from 'classnames';
import styles from './index.module.scss';

const Headline = ({ tag: Component = "h2" , children, size }) => (
  <Component className={classNames(styles.Headline, { [styles[`Headline${size}`]]: !!size})}>{children}</Component>
)

export default Headline;
