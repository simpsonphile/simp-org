import { shortenAddress } from '@usedapp/core';
import { HStack, Tooltip } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useCopyToClipboard } from 'react-use';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
const ShortAddress = ({ children }) => {
  const [, copy] = useCopyToClipboard();

  const onClick = () => {
    copy(children);
  };

  return (
    <Tooltip label={children}>
      <HStack>
        <span>{shortenAddress(children)}</span>
        <Popover size="sm">
          <PopoverTrigger>
            <Button size="xs" onClick={onClick}>
              <CopyIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody as="">copied</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </Tooltip>
  );
};

export default ShortAddress;
