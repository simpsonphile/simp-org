import classNames from 'classnames';
import styles from './index.module.scss';

const Headline = ({
  tag: Component = 'h2',
  className,
  children,
  size,
  ...otherProps
}) => (
  <Component
    className={classNames(
      styles.Headline,
      { [styles[`Headline${size}`]]: !!size },
      className
    )}
    {...otherProps}
  >
    {children}
  </Component>
);

export default Headline;
