import Layout from "/components/Layout";
import Link from "next/link";
import getAllDocs from '/services/getAllDocs';

export default function Posts ({ links }) {
  return (
    <Layout links={links}>
      <h1>Posts</h1>
      <ul>
        {links.map((slug) => <li key={slug}><Link href={`/posts/${slug}`}>{slug}</Link></li>)}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const links = await getAllDocs();

  return {
    props: {
      links,
    },
  };
}