import Header from '../Header';
import Headline from '../Headline';
import PostCard from '../PostCard';
import styles from './index.module.scss';

const RelatedPosts = ({ links, slug }) => {
  const currentIndex = links.indexOf(slug);
  const lastIndex = links.length - 1;
  const prevIndex = currentIndex - 1 > 0 ? currentIndex - 1 : currentIndex;
  const nextIndex = currentIndex + 1 > lastIndex ? lastIndex : currentIndex + 1;
  const prevPost = links[prevIndex];
  const nextPost = links[nextIndex];

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
  );
};

export default RelatedPosts;
