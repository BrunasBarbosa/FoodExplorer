import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: .8rem;
  
  svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer; 

    p {
      text-align: center;
      font-size: clamp(1.4rem, .6rem + 1.2vw, 2.4rem);
    }

    .description {
      font-family: var(--font-secondary);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
      text-align: center;
      display: none;
    }

    svg {
      height: 2.6rem;
      width: 2.6rem;
    }

    img {
      width: clamp(8.8rem, 2rem + 16vw, 17.6rem);
    }

    span {
      font-family: var(--font-secondary);
      font-size: clamp(1.6rem, .1rem + 4vw, 2rem);
    }

    > span {
      color: ${({ theme }) => theme.COLORS.AQUA};
      font-size: clamp(1.6rem, .8rem + 2vw, 3.2rem);
    }
  }

  @media (min-width: 1100px) {
    width: clamp(21rem, 5rem + 18vw, 34.4rem);
    height: clamp(29rem, 5rem + 30vw, 46.2rem);
    gap: 1.5rem;

    p {
      font-weight: 700;
    }
    
    p:nth-child(3) {
      display: block;
    }

    .counter {
      flex-direction: row;

      padding-inline: 2.4rem;

      button {
        padding: 1.2rem 2.4rem;
      }
    }
  }
`;