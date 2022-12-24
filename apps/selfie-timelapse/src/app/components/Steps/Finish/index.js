import { useTimelapseContext } from '../../../contexts/TimelapseContext';
import { BsDownload } from 'react-icons/bs';
import { Headline, Header, Button } from '@simp-org/shared';
import styles from './styles.module.scss';
import generateGif from '../../../services/generateGif';
import { useEffect, useState } from 'react';

const Upload = () => {
  const [gifUrl, setGifUrl] = useState('');
  const {
    state: { zipURL, transformedImages },
    actions: { resetStore, setCurrentStep },
  } = useTimelapseContext();

  const goBack = () => {
    setCurrentStep('EDIT');
  };

  useEffect(() => {
    generateGif(transformedImages, setGifUrl);
  }, []);

  return (
    <div className={styles.Finish}>
      <Header>
        <Headline>Your timelapse is ready to download!</Headline>
      </Header>

      {gifUrl && <img src={gifUrl} alt="ss" />}

      <div className={styles.FinishButtons}>
        {!!zipURL && (
          <Button href={zipURL} as="a" icoRight={<BsDownload />}>
            download images as zip
          </Button>
        )}

        <Button variation="secondary" onClick={resetStore}>
          Try again
        </Button>

        <Button variation="secondary" onClick={goBack}>
          Go back to edit
        </Button>
      </div>
    </div>
  );
};

export default Upload;
