import Headline from '../Headline';

const Date = ({ children }) => (
  <Headline tag="p" size="xxs" className="color-text-s-300">
    {children}
  </Headline>
);

export default Date;
