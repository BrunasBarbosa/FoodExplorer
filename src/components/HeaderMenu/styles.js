import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  padding: 6.4rem 0 3.2rem 2.8rem;

  display: flex;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  h1 {
    font-size: 2.16rem;
    font-weight: 400;
    line-height: 2.4rem;
    font-family: var(--font-secondary);
  }
`;