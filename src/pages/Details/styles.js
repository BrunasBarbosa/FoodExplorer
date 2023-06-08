import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-area: 
  "header"
  "content"
  "footer";
  overflow: auto;
`;

export const Content = styled.main`
  width: 100%;
  padding: 0 5.6rem 4.8rem;

  .return {
    padding: 3.6rem 0 1.6rem;
  }

  @media (min-width: 900px) {
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
    
    .return {
      margin-bottom: 4.2rem;
    }
  }

`;