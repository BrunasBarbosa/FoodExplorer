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
  padding: 3.6rem 5.6rem 4.8rem;

  .edit-button {
    display: none;
  }

  .return {
    max-width: 10rem;
    font-size: 2.4rem;
  }

  @media (min-width: 900px) {
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
    
    .return {
      margin-bottom: 4.2rem;
    }
  }

`;