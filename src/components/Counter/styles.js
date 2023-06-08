import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  > div {
    font-family: var(--font-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

    svg {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  .button-details {
    padding: 1rem 4rem 1rem 6.8rem;
    font-size: clamp( .9rem, .2rem + 2vw, 1.4rem);
    
    svg {
      width: 1.7rem;
      height: 1.7rem;
    }

    @media (min-width: 700px) {
      padding: 1.2rem 2.4rem;

      svg {
        display: none;
      }
    }
  }
`;