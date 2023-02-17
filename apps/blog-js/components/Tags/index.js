import styles from './index.module.scss';
import Tag from '../Tag';

const Tags = ({ tags }) => (
  <ul className={styles.Tags}>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag>{tag}</Tag>
      </li>
    ))}
  </ul>
);

export default Tags;
