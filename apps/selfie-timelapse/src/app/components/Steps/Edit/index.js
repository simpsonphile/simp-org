import { useTimelapseContext } from '../../../contexts/TimelapseContext';
import styles from './styles.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import {
  Button,
  Card,
  ImageListPaginated,
  Spinner,
  Header,
  Headline,
} from '@simp-org/shared';

const Upload = () => {
  const {
    state: { images, disabledImages, timelapseLoading },
    actions: { generateTimelapse, toggleImage, setCurrentStep },
  } = useTimelapseContext();

  return (
    <div>
      {!!images.length && (
        <Header className={styles.EditHeader}>
          <Button
            variation="secondary"
            icoLeft={<BsChevronLeft />}
            onClick={() => setCurrentStep('UPLOAD')}
          >
            Back to upload
          </Button>
          <Headline>Choose uploaded files</Headline>

          <Button
            className={styles.EditHeaderGenerateBtn}
            icoRight={timelapseLoading ? <Spinner /> : undefined}
            onClick={generateTimelapse}
          >
            generate Timelapse
          </Button>
        </Header>
      )}
      {!!images.length && (
        <Card>
          <ImageListPaginated
            srcs={images}
            isImageDisabled={({ src }) => disabledImages.includes(src)}
            onImageClick={({ src }) => toggleImage(src)}
          />
        </Card>
      )}
    </div>
  );
};

export default Upload;
