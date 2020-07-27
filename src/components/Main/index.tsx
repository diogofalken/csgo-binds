import React from 'react';

import Card from '../Card';

import { Container } from './styles';

import { info } from '../../data/binds';

const Main: React.FC = () => {
  return (
    <Container>
      {info.map((cur) => (
        <Card keyAlias={cur.keyAlias} keyBind={cur.keyBind} />
      ))}
    </Container>
  );
};

export default Main;
