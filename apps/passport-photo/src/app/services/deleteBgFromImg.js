import * as BodyPix from "@tensorflow-models/body-pix";
import * as tf from '@tensorflow/tfjs';
import { getLoadedImgFromSrc } from '@simp-org/photo-services';
tf.getBackend()

const deleteBgFromImg = async (src) => {
  const img = await getLoadedImgFromSrc(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  const net = await BodyPix.load({
    outputStride: 8,
    quantBytes: 4
  })

  const segmentation = await net.segmentPerson(canvas, {
    internalResolution: 'low',
    segmentationThreshold: 0.5,
    // nmsRadius: 1
  })

  const {data: imgData} = ctx.getImageData(0,0,canvas.width,canvas.height)

  const newImg = ctx.createImageData(canvas.width, canvas.height);

  const newImgData = newImg.data;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  segmentation.data.forEach((segment, i) => {
    if (segment === 0) {
      newImgData[i * 4] = 255
      newImgData[i * 4 + 1] = 255
      newImgData[i * 4 + 2] = 255
      newImgData[i * 4 + 3] = 255
    } else if (segment === 1) {
      newImgData[i * 4] = imgData[i * 4]
      newImgData[i * 4 + 1] = imgData[i * 4 + 1]
      newImgData[i * 4 + 2] = imgData[i * 4 + 2]
      newImgData[i * 4 + 3] = imgData[i * 4 + 3]
    }
  })

  ctx.putImageData(newImg, 0, 0);


  return canvas.toDataURL('image/png');
}

export default deleteBgFromImg;
