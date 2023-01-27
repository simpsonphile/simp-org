import styles from './index.module.scss';

const PostContent = ({children}) => (
  <div className={styles.PostContent} dangerouslySetInnerHTML={{__html: children}} />
)

export default PostContent;