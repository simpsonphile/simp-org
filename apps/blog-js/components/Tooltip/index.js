import { Tooltip as RCTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useId } from 'react';

const Tooltip = ({ children, ...otherProps }) => {
  const id = useId();
  return (
    <>
      <div id={id}>{children}</div>
      <RCTooltip {...otherProps} anchorId={id} />
    </>
  );
};

export default Tooltip;
