import Layout from '/components/Layout';
import getAllDocs from '/services/getAllDocs';
import PostList from '/components/PostList';
import Headline from '/components/Headline';
import Header from '/components/Header';
import Section from '/components/Section';

export default function Posts({ tag, docs }) {
  const links = docs.map(({ path }) => path);
  return (
    <Layout links={links}>
      <Section>
        <Header>
          <Headline tag="h1" size="xl" decorator=">">
            Posts for {tag}
          </Headline>
        </Header>

        <PostList docs={docs} />
      </Section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/');

  const docs = (await getAllDocs()).filter((doc) =>
    doc.metadata.tags?.includes(slug)
  );

  return {
    props: {
      docs,
      tag: slug,
    },
  };
}

export async function getStaticPaths() {
  const docs = await getAllDocs();

  const tags = [
    ...new Set(docs.flatMap(({ metadata }) => metadata.tags || [])),
  ];

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.split('/'),
        },
      };
    }),
    fallback: false,
  };
}
