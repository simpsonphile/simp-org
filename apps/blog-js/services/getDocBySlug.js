const path = require('path');

const FOLDER_PATH = path.join(process.cwd(), 'apps/blog-js/posts/');

const getDocBySlug = (slug) => {
  return FOLDER_PATH + slug + '.md';
}

export default getDocBySlug;