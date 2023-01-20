import { UploadDropzone } from '@simp-org/shared';
import { usePassportPhotoContext } from '../../../contexts/PassportPhotoContext';

const Upload = () => {
  const { actions: { setCurrentStep, generatePhotoFixed } } = usePassportPhotoContext();

  const onDrop = (files) => {
    generatePhotoFixed(URL.createObjectURL(files[0]));
    setCurrentStep('FINISH');
  }

  return (
    <div>
      <UploadDropzone onDrop={onDrop} />
    </div>
  )
}
export default Upload;
