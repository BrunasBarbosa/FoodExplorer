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
      line-height: 2.4rem;
    }
  }

  input {
    font-family: var(--font-secondary);
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
  
  div:nth-child(3) {
    display: none;
  }

  svg:last-child {
    display: none;
  }

  @media (min-width: 900px) {
    height: 10.4rem;
    margin-bottom: 2.6rem;
    padding-top: 2.8rem;
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
    gap: 3.2rem;

    > svg {
      display: none;
    }

    div:nth-child(2){
      max-width: 20rem;
    }

    div:nth-child(3) {
      display: flex;
      border-radius: .5rem;
    }

    svg:last-child {
      display: flex;
    }
  }
`;
