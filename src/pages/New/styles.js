import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  width: 100%;
  padding: 1rem 3.2rem 5.3rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  div:first-child {
    font-size: 1.6rem;

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800}
    /* display: none; */
  }
`;