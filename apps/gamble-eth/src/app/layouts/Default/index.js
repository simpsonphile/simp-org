import { Container } from '@chakra-ui/react';
import Header from '../../components/Header';

const LayoutDefault = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Header />
      {children}
    </Container>
  );
};

export default LayoutDefault;
