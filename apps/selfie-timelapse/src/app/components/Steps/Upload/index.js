import { useTimelapseContext } from '../../../contexts/TimelapseContext';
import HeroSection from '../../HeroSection';
import { UploadDropzone } from '@simp-org/shared';

const Upload = () => {
  const {
    actions: { setImages, setCurrentStep },
  } = useTimelapseContext();

  const onFileUpload = (files) => {
    setImages(Object.values(files).map((file) => URL.createObjectURL(file)));
    setCurrentStep('EDIT');
  };

  return (
    <div>
      <HeroSection>
        <UploadDropzone onDrop={onFileUpload} />
      </HeroSection>
    </div>
  );
};

export default Upload;
