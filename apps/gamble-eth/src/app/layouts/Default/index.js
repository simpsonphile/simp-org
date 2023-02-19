import { Container } from '@chakra-ui/react';
import Header from '../../components/Header';

const LayoutDefault = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default LayoutDefault;
