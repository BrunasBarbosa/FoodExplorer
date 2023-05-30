import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 71.2rem;
  padding: 3.6rem 2.8rem 0;
  margin-bottom: 1.3rem;

  div {
    border-radius: .5rem;
  }

  input {
    font-family: var(--font-secondary);
  }

  div:first-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    margin-bottom: 3.6rem;
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  button {
    padding: 1rem;

    text-align: left;
    font-size: 2.4rem;
    font-weight: 300;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;