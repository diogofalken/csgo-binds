import React from 'react';

import { Container, Banner, Info } from './styles';

interface Props {
  keyAlias: string;
  keyBind: string;
}

const Card: React.FC<Props> = ({ keyAlias, keyBind }) => {
  function copyBind(e) {
    e.preventDefault();

    // Get the bind clicked
    const bind = e.target.innerHTML;

    // Create a aux element and copy to clipboard
    const el = document.createElement('textarea');
    el.value = bind;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert('Copied to clipboard.');
  }

  return (
    <Container>
      <Banner>
        <p>{keyAlias}</p>
      </Banner>

      <Info>
        <p onClick={copyBind}>{keyBind}</p>
      </Info>
    </Container>
  );
};

export default Card;
