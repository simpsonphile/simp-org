import {Tooltip as RCTooltip} from 'react-tooltip';

const Tooltip = ({children, ...otherProps}) => (
  <RCTooltip {...otherProps}>{children}</RCTooltip>
)

export default Tooltip;