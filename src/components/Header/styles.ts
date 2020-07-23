import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  text-align: center;
  line-height: 0.9;

  > h1 {
    font-size: 80px;
    font-family: 'Roboto', sans-serif;
  }

  > p {
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;

export const Buttons = styled.div`
  width: max(20%, 300px);
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;

  > button {
    width: 140px;
    height: 45px;
    font-size: 14px;
    color: var(--black);
    background-color: var(--white);
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: var(--pink);
      box-shadow: 0px 15px 20px rgba(236, 8, 104, 0.4);
      color: var(--white);
      transform: translateY(-7px);
    }
  }
`;
