const recursiveDir = require('recursive-readdir');
const path = require('path');
const util = require('util');
import markdownFrontMatterToData from '/services/markdownFrontMatterToData';
import getDocBySlug from './getDocBySlug';

const readdir = util.promisify(recursiveDir);

const FOLDER_PATH = path.join(process.cwd(), 'apps/blog-js/posts/');

const getAllDocs = async () => {
  const docs = await readdir(FOLDER_PATH);
  const docsWithMetadata = [];

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const path = doc.split(FOLDER_PATH)[1].split('.')[0];

    const metadata = await markdownFrontMatterToData(getDocBySlug(path));

    docsWithMetadata.push({
      path,
      metadata,
    });
  }

  return docsWithMetadata;
};

export default getAllDocs;
