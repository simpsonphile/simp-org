import { shortenAddress } from '@usedapp/core';
import { Tooltip } from '@chakra-ui/react';

const ShortAddress = ({ children }) => {
  return <Tooltip label={children}>{shortenAddress(children)}</Tooltip>;
};

export default ShortAddress;
