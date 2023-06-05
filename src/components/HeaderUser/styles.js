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

  div {
    display: flex;
    gap: .8rem;
    justify-content: center;

    p {
      font-size: clamp(2.1rem, 1rem + 2vw, 2.6rem);
      line-height: 2.4rem;
    }

    img {
      height: clamp(2.1rem, 1rem + 4vw, 3.2rem);
    }

  }
  
  div:nth-child(3) {
    display: none;
  }

  @media (min-width: 900px) {
    margin-bottom: 2.6rem;

    > svg {
      display: none;
    }

    div:nth-child(3) {
      display: flex;
    }
  }
`;
