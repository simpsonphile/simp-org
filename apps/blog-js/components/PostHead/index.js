import Head from 'next/head';
import { jsonLdScriptProps } from 'react-schemaorg';

const PostHead = ({
  title,
  description,
  img,
  date,
  keywords,
  index,
  follow,
  url,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords?.length && (
      <meta property="keywords" content={keywords.join(', ')} />
    )}
    <meta name="author" content="Dawid Mazewski" />

    <meta name="robots" content="follow, index" />

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_PATH + url} />
    <meta property="og:image" content={img} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={img} />
    {/* <meta name="twitter:site" content="@USERNAME" />
    <meta name="twitter:creator" content="@USERNAME" /> */}

    <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_PATH + url} />

    <script
      {...jsonLdScriptProps({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        image: [img],
        datePublished: date,
        dateModified: date,
        author: [
          {
            '@type': 'Person',
            name: 'Dawid Mazewski',
            url: 'https://example.com/profile/janedoe123',
          },
        ],
      })}
    />
  </Head>
);

export default PostHead;
