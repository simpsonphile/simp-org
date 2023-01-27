import fm from 'front-matter';
import { read } from 'to-vfile';

const markdownFrontMatterToData = async (file) => {
  const processed = await read(file);

  const readingTime = Math.ceil(processed.value.toString().split(' ').length / 200);


  return {
    ...fm(processed.value.toString()).attributes,
    readingTime
  }
}

export default markdownFrontMatterToData;