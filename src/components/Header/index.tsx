import React from 'react';

import { Container, Logo, Buttons } from './styles';

const Header: React.FC = () => {
  function redirectURL(e) {
    e.preventDefault();

    // Redirect and change window to new tab
    const win = window.open(
      e.target.innerHTML === 'GITHUB'
        ? 'https://github.com/diogofalken/csgo-binds'
        : 'https://www.figma.com/file/9D7CqvtggqmJDgEhGlTXHg/CSGO-Binds?node-id=1%3A2',
      '_blank',
    );
    win.focus();
  }

  return (
    <Container>
      <Logo>
        <h1>CSGO</h1>
        <p>BINDS</p>
      </Logo>

      <Buttons>
        <button onClick={redirectURL}>GITHUB</button>
        <button onClick={redirectURL}>FIGMA</button>
      </Buttons>
    </Container>
  );
};

export default Header;
