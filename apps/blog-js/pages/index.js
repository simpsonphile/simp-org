import Layout from '/components/Layout';
import getAllDocs from '/services/getAllDocs';
import PostList from '/components/PostList';
import Headline from '/components/Headline';
import Header from '/components/Header';
import Section from '/components/Section';

export default function Posts({ docs }) {
  return (
    <Layout links={docs.map(({ path }) => path)}>
      <Section>
        <Header>
          <Headline tag="h1" size="xl" decorator=">">
            All posts
          </Headline>
        </Header>

        <PostList docs={docs} />
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const docs = await getAllDocs();

  return {
    props: {
      docs,
    },
  };
}
