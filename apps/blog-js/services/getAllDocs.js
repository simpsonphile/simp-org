const recursiveDir = require('recursive-readdir');
const path = require('path');
const util = require('util');


const readdir = util.promisify(recursiveDir);

const FOLDER_PATH = path.join(process.cwd(), 'apps/blog-js/posts/');

const getAllDocs = async () => {
  const docs =  await readdir(FOLDER_PATH);

  return docs.map((doc) => doc.split(FOLDER_PATH)[1].split('.')[0]);
}

export default getAllDocs;
