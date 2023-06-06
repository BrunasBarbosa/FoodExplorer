import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  padding: 2.9rem 2.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  white-space: nowrap;

  > div {
    gap: .8rem;
     
    filter: grayscale(80%);
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    p {
      font-size: clamp(1.5rem, .6rem + 2vw, 2.4rem);
    }

    img {
      width: clamp(1.5rem, .6rem + 2vw, 2.4rem);
    }
  }

  > p {
    font-size: 1.15rem;
    line-height: 1.6rem;
  }

  @media (min-width: 900px) {
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
  }
`;