import { Container } from '@chakra-ui/react';
import Header from '../../components/Header';

const LayoutDefault = ({ children }) => {
  return (
    <Container maxW="840">
      <Header />
      {children}
    </Container>
  );
};

export default LayoutDefault;
