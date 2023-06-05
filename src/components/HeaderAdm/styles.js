import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: space-between;

  padding: 5.6rem 2.8rem 2.4rem;
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: .8rem;

  div {
    justify-content: right;
    display: flex;
    gap: .8rem;

    p {
      font-size: 2.1rem;
      line-height: 2.4rem;
    }
    
    svg {
      height: 2.4rem;
    }
  }

  span {
    width: 50%;
    font-family: var(--font-secondary);
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.AQUA};
  }
`;