import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      {/* <Main></Main> */}

      <Footer />
    </Container>
  );
};

export default Layout;
