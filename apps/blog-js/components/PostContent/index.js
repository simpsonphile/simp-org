import styles from './index.module.scss';

const PostContent = ({ children }) => (
  <div
    dangerouslySetInnerHTML={{ __html: children }}
    className={styles.PostContent}
  />
);

export default PostContent;
