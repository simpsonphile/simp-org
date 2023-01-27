import Card from "../Card";
import Headline from "../Headline";
import Link from "next/link";
import styles from './index.module.scss';

const PostCard = ({ subtitle, title, link }) => {
  return (
    <Card as={Link} href={link} className={styles.PostCard}>
      <Headline tag="p">{subtitle}</Headline>
      <Headline tag="h4">{title}</Headline>
    </Card>
  )
}

export default PostCard;