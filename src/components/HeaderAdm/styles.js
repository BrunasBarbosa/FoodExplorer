import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;
  
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: 900px) {
    height: 10.4rem;
    margin-bottom: 2.6rem;
    padding-top: 2.8rem;
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
    
    > div {
      gap: 3.2rem;
    }

    svg:first-child {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  div:nth-child(2) {
    display: none;
  }

  button {
    display: none;
  }

  svg:last-child {
    display: none;
  }

  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    p {
      line-height: 2.4rem;
    }
    
    svg {
      height: 2.4rem;
    }

    > div {
      justify-content: end;
      gap: .8rem;
    }
  }

  span {
    width: 50%;
    font-family: var(--font-secondary);
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.AQUA};
  }

  @media (min-width: 900px) {
    div:nth-child(2) {
      display: flex;
    }

    input {
      font-family: var(--font-secondary);
    }

    button {
      max-width: 22rem;
      display: block;
    }

    svg:nth-child(1) {
      display: block;
    }

    .logo {
      max-width: 19.7rem;
      padding-right: .6rem;
      flex-direction: column;
      min-width: 20rem;
      line-height: .6rem;
      gap: 0;
      
      span {
        width: 100%;
        text-align: right;
      }
    }
  }
`;