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
import ClientOnly from '../components/ClientOnly';

export default function Post({ content, metadata, links, slug }) {
  return (
    <Layout links={links}>
      <article>
        <PostHead {...metadata} url={slug} />
        <PostHero slug={slug} {...metadata} />
        <PostContent>{content}</PostContent>
        <RelatedPosts slug={slug} links={links} />
        <ClientOnly>
          <Giscus />
        </ClientOnly>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const docs = await getAllDocs();
  const file = getDocBySlug(params.slug.join('/'));

  const content = await markdownToHtml(file);
  const metadata = await markdownFrontMatterToData(file);

  return {
    props: {
      content,
      metadata,
      links: docs.map(({ path }) => path),
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
          slug: doc.path.split('/'),
        },
      };
    }),
    fallback: false,
  };
}
