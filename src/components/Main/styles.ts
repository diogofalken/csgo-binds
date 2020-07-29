import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 50px 10px;

  @media (max-width: 979px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 762px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
