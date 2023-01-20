import { Layout } from '@simp-org/shared';
import Logo from "./components/Logo";
import { usePassportPhotoContext, STEPS } from "./contexts/PassportPhotoContext";
import Upload from "./components/Steps/Upload";
import Finish from "./components/Steps/Finish";

export function App() {
  const {state: { currentStep }} = usePassportPhotoContext();

  // const [img, setImg] = useState('');
  // const [imgNoBg, setImgNoBg] = useState('');
  // const x = (files) => setImg(URL.createObjectURL(files[0]));

  // const y = async (cImg) => {
  //   const newImg = await trimPhotoToPassportSize(cImg);
  //   const newImg2 = await deleteBgFromImg(newImg.img);

  //   setImgNoBg(newImg2);
  // }

  const currentStepElement = () => {
    switch (currentStep) {
      case STEPS.UPLOAD:
        return <Upload />;
      case STEPS.FINISH:
        return <Finish />;
      default:
        return <Upload />;
    }
  };

  // useEffect(() => {
  //   if (img) {
  //     y(img);
  //   }
  // }, [img]);

  return (
    <Layout logo={<Logo />}>
      {currentStepElement()}
    </Layout>
  );
}
export default App;
