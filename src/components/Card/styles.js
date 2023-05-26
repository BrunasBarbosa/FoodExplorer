import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  p {
    font-size: 1.4rem;
  }

  svg {
    height: 2.6rem;
    width: 2.6rem;
  }

  > svg {
    height: 3.2rem;
    width: 3.2rem;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  img {
    width: 8.8rem;
  }

  span {
    font-family: var(--font-secondary);
    font-size: 1.6rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.AQUA};
  }
`;