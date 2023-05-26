import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2.4rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }

  .card {
    max-width: 21rem;
  }

`;