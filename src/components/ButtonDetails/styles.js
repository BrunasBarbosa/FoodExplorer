import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  svg {
    z-index: 1;
    position: absolute;
    left: 5rem;
  }

  button {
    font-size: clamp( .9rem, .2rem + 2vw, 1.4rem);
    padding: 1rem 4rem 1rem 6.8rem;
  }

  @media (min-width: 700px) {
    svg {
      display: none;
    }

    button {
      padding: 1.2rem 2.4rem;
    }
  }
`;