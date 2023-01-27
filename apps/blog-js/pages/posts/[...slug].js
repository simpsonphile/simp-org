import Head from 'next/head';
import markdownToHtml from '/services/markdownToHtml';
import markdownFrontMatterToData from '/services/markdownFrontMatterToData';
import getDocBySlug from '/services/getDocBySlug';
import getAllDocs from '/services/getAllDocs';
import Layout from '/components/Layout';
import PostHero from '/components/PostHero';
import PostContent from '/components/PostContent';
import RelatedPosts from '/components/RelatedPosts';

export default function Post ({ content, metadata, links, slug }) {
  return (
    <Layout links={links}>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="description" content={metadata.description} />
      </Head>
      <PostHero slug={slug} {...metadata} />
      <PostContent>
        {content}
      </PostContent>
      <RelatedPosts  />

      <script src="https://giscus.app/client.js"
        data-repo="simp-org"
        data-repo-id="simp-org"
        data-category="[ENTER CATEGORY NAME HERE]"
        data-category-id="[ENTER CATEGORY ID HERE]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
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