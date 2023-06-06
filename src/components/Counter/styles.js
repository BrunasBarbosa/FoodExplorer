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

  div:nth-child(2) {
    svg {
      width: 1.7rem;
      height: 1.7rem;
    }
  }

  button {
    padding: .4rem 5.9rem;
  }
`;