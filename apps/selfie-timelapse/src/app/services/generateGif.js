import { createGIF } from 'gifshot';
const generateGif = async (images, onFinish) => {
  createGIF(
    {
      images,
    },
    function (obj) {
      if (!obj.error) {
        const image = obj.image;

        onFinish(image);
      }
    }
  );
};

export default generateGif;
