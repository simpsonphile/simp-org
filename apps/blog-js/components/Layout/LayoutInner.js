import styles from './index.module.scss';

const LayoutInner = ({children}) => {
  return (
    <div className={styles.LayoutInner}>{children}</div>
  )
}

export default LayoutInner;