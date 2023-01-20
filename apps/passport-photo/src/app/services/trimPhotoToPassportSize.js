import * as BodyPix from "@tensorflow-models/body-pix";
import * as tf from '@tensorflow/tfjs';
import { getLoadedImgFromSrc } from '@simp-org/photo-services';

tf.getBackend()


const transformImage = async (image, dx, dy, nWidth, nHeight) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const newImage = document.createElement('img');
  const scale = image.width / nWidth;
  canvas.width = nWidth;
  canvas.height = nHeight;
  

  console.log(dx, dy, nWidth, nHeight, scale);

  ctx.drawImage(image, dx, dy, nWidth * scale, nHeight * scale);

  const url = canvas.toDataURL('image/jpeg');

  newImage.src = url;

  return await new Promise((resolve) => {
    newImage.onload = (e) => resolve(e.target);
  });
};

const trimPhotoToPassportSize = async (src) => {
  const PHOTO_WIDTH = 35;
  const FACE_HEIGHT = 35;
  const PHOTO_HEIGHT = 45;

  const img = await getLoadedImgFromSrc(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const net = await BodyPix.load();

  const segmentation = await net.segmentPersonParts(canvas);

  const imgWidth = segmentation.width;
  let faceTop = undefined;
  let faceLeft = undefined;
  let faceRight = undefined;
  let faceBot = undefined;
  for (let i = 0; i < segmentation.data.length; i++) {
    const segment = segmentation.data[i];

    if ([0, 1].includes(segment)) {
      const x = i % imgWidth;
      const y = Math.floor(i / imgWidth);
      const point = { x, y };

      if (!faceTop) faceTop = point;
      else if (!faceLeft || faceLeft.x > point.x) faceLeft = point;
      else if (!faceRight || faceRight.x < point.x) faceRight = point;
      else if (!faceBot || faceBot.y < point.y) faceBot = point;
    }
  }

  const faceHeight = Math.abs(faceTop.y - faceBot.y);
  const faceWidth = Math.abs(faceRight.x - faceLeft.x);



  const dy = 10 / FACE_HEIGHT * faceHeight;
  const dx = faceHeight - faceWidth;

  const dyt = dy * 0.3;
  // const dyb = dy * 0.7;
  const dxl = dx / 2;
  // const dxr = dy / 2;

  const photoTopY = faceTop.y - dyt;
  // const photoBotY = faceBot.y + dyb;
  const photoLeftX = faceLeft.x - dxl;
  // const photoRightX = faceRight.x + dxr;

  console.log({faceHeight, faceWidth, imgWidth, faceTop, faceRight, faceBot, faceLeft, photoTopY, photoLeftX });


  const newImg = await transformImage(img, -photoLeftX, -photoTopY, faceHeight, faceHeight + dy);

  return newImg.src;
}

export default trimPhotoToPassportSize;