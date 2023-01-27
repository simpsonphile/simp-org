import Header from "../Header";
import Headline from "../Headline";
import PostCard from "../PostCard";
import styles from './index.module.scss';

const RelatedPosts = ({ link }) => {
  const prevPost = 'react/context';
  const nextPost = 'react/custom-hooks/use-refered-scheme/context';

  return (
    <section className={styles.RelatedPosts}>
      <Header>
        <Headline tag="h3">Related Posts</Headline>
      </Header>
      <div className={styles.RelatedPostsCards}>
        <PostCard subtitle="previous" title={prevPost} link={prevPost} />
        <PostCard subtitle="next" title={nextPost} link={nextPost} />
      </div>
    </section>
  )
}

export default RelatedPosts;