import markdownToHtml from '/services/markdownToHtml';
import markdownFrontMatterToData from '/services/markdownFrontMatterToData';
import getDocBySlug from '/services/getDocBySlug';
import getAllDocs from '/services/getAllDocs';
import Layout from '/components/Layout';
import PostHero from '/components/PostHero';
import PostContent from '/components/PostContent';
import RelatedPosts from '/components/RelatedPosts';
import PostHead from '/components/PostHead';
import Giscus from '/components/Giscus';

export default function Post ({ content, metadata, links, slug }) {
  return (
    <Layout links={links}>
      <article>
        <PostHead {...metadata} />
        <PostHero slug={slug} {...metadata} />
        <PostContent>{content}</PostContent>
        <RelatedPosts  />
        <Giscus />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const links = await getAllDocs();
  const file = getDocBySlug(params.slug.join('/'));

  const content = await markdownToHtml(file);
  const metadata = await markdownFrontMatterToData(file);

  return {
    props: {
      content,
      metadata,
      links,
      slug: params.slug.join('/'),
    },
  };
}

export async function getStaticPaths() {
  const docs = await getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.split('/'),
        },
      };
    }),
    fallback: false,
  };
}