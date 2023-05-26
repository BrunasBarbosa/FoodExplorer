import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2.4rem 2.4rem 0;

  h3 {
    line-height: 2.5rem;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }

  .card {
    max-width: 21rem;
  }

`;