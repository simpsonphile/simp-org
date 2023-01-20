import { usePassportPhotoContext } from '../../../contexts/PassportPhotoContext';
import { Image, Button } from '@simp-org/shared';
import PhotoFramed from "../../PhotoFramed";
import { Header, Headline, Section } from '@simp-org/shared';
import BeforeAfterPhoto from '../../BeforeAfterPhoto';

const Finish = () => {
  const { 
    state: { photo, photoFixed, photoFixedLoading },
    actions: { resetStore },
   } = usePassportPhotoContext();
  
  return (
    <div>
      <Section>
        <Header>
          <Headline>Your photo is ready to use</Headline>
        </Header>

        <Section.Part>
          <BeforeAfterPhoto>
            {photo && (
              <PhotoFramed>
                <Image src={photo} alt="d" />
              </PhotoFramed>
            )}

            {photoFixed && (
              <PhotoFramed>
                <Image src={photoFixed} alt="d" />
              </PhotoFramed>
            )}
            {photoFixedLoading ? 'loading' : 'loaded'}
          </BeforeAfterPhoto>
        </Section.Part>

        <Section.Actions>
          {photoFixed && (
            <Button onClick={resetStore} variation="secondary">Try another photo</Button>
          )}
        </Section.Actions>
      </Section>

      <Section>
        <Header>
          <Headline>What you get</Headline>
          <ul>
            <li>perfect quality png photo</li>
            <li>perfect quality png photo for print in grid</li>
          </ul>
        </Header>

      </Section>

      <Section>
        <Header>
          <Headline>Choose payment method</Headline>
        </Header>

        <Section.Actions>
          {photoFixed && (
            <Button>Buy (20$)</Button>
          )}
        </Section.Actions>
      </Section>
    </div>
  )
}
export default Finish;
