import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
  }

  button {
    padding: .4rem 5.9rem;
  }
`;