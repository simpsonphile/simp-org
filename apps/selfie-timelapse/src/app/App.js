import 'normalize.css';
import {Layout, ProgressBar} from '@simp-org/shared';
import { STEPS, useTimelapseContext } from './contexts/TimelapseContext';
import Upload from './components/Steps/Upload';
import Edit from './components/Steps/Edit';
import Finish from './components/Steps/Finish';

function App() {
  const {
    state: { currentStep, progress, timelapseLoading, images },
  } = useTimelapseContext();

  const currentStepElement = () => {
    switch (currentStep) {
      case STEPS.UPLOAD:
        return <Upload />;
      case STEPS.EDIT:
        return <Edit />;
      case STEPS.FINISH:
        return <Finish />;
      default:
        return <Upload />;
    }
  };

  return (
    <Layout>
      {timelapseLoading && (
        <ProgressBar done={progress} parts={images.length} />
      )}
      {currentStepElement()}
    </Layout>
  );
}

export default App;
