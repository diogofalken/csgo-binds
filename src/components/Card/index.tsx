import React from 'react';

import { Container, Banner, Info } from './styles';

interface Props {
  keyAlias: string;
  keyBind: string;
}

const Card: React.FC<Props> = ({ keyAlias, keyBind }) => {
  return (
    <Container>
      <Banner>
        <p>{keyAlias}</p>
      </Banner>

      <Info>
        <p>{keyBind}</p>
      </Info>
    </Container>
  );
};

export default Card;
