import markdownToHtml from '/services/markdownToHtml';
import markdownFrontMatterToData from '/services/markdownFrontMatterToData';
import getDocBySlug from '/services/getDocBySlug';
import PostHero from '/components/PostHero';
import PostContent from '/components/PostContent';
import RelatedPosts from '/components/RelatedPosts';
import PostHead from '/components/PostHead';
import Giscus from '/components/Giscus';

const PostPage = async ({ params: { slug }}) => {
  const file = getDocBySlug(slug);

  const content = await markdownToHtml(file);
  const metadata = await markdownFrontMatterToData(file);
  return (
    <article>
      <PostHead {...metadata} />
      <PostHero slug={slug} {...metadata} />
      <PostContent>{content}</PostContent>
      <RelatedPosts  />
      <Giscus />
    </article>
  )
}

export default PostPage;