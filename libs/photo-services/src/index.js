export const getImgFromSrc = (src) => {
  const img = document.createElement('img');
  img.src = src;
  return img;
};

export const getLoadedImgFromSrc = async (src) => {
  const promise = await new Promise((resolve) => {
    const source = getImgFromSrc(src);
  
    source.onload = (e) => {
      console.log(e.target);
      resolve(e.path[0]);
    };
  })

  const resolved = await Promise.any([promise]);

  return resolved;
}
