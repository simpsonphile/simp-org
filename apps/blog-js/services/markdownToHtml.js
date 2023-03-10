import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import { read } from 'to-vfile';
import remarkFrontmatter from 'remark-frontmatter';
import remarkBlockquotesExtended from 'remark-blockquotes-extended';

const markdownToHtml = async (file) => {
  const processed = await unified()
    .use(remarkFrontmatter)
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBlockquotesExtended)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeToc)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(await read(file));

  return String(processed);
};

export default markdownToHtml;
