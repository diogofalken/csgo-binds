import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 241px;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const Banner = styled.div`
  background: var(--secondary);
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: var(--white);
    font-size: 24px;
  }
`;

export const Info = styled.div`
  background: (--white);
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: var(--black);
    font-size: 24px;

    &:hover {
      cursor: pointer;
      background: var(--pink);
      padding: 5px;
      border-radius: 20px;
      color: var(--white);
      transition: 0.25s all;
    }
  }
`;
