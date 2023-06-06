import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1.7rem;
  align-items: center;
  font-family: var(--font-secondary);

  img {
    height: clamp(2.1rem, 1rem + 4vw, 3.2rem);
  }
  
  > p {
    font-weight: 700;
    font-size: clamp(2.1rem, 1rem + 2vw, 2.6rem);
  }
`;
