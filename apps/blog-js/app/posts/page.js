import Link from "next/link";
import getAllDocs from '/services/getAllDocs';

const Posts = async () => {
  const links = await getAllDocs();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {links.map((slug) => <li key={slug}><Link href={`/posts/${slug}`}>{slug}</Link></li>)}
      </ul>
    </div>
  )
}

export default Posts;