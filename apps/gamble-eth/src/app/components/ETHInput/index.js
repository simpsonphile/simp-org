import { InputGroup, Input, InputRightAddon } from '@chakra-ui/react';

const ETHInput = ({ value, onChange, ...otherProps }) => {
  return (
    <InputGroup>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange({ value: e.target.value })}
        {...otherProps}
      />

      <InputRightAddon>Eth</InputRightAddon>
    </InputGroup>
  );
};

export default ETHInput;
