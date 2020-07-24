import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background: var(--secondary);

  margin-top: 5%;

  position: relative;
  bottom: 0;

  display: flex;
  justify-content: center;

  > p {
    align-self: center;

    > a {
      text-decoration: none;
      color: var(--pink);
    }
  }
`;
