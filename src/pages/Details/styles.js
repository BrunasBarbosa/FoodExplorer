import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-area: 
  "header"
  "content";
  overflow: auto;
`;

export const Content = styled.main`
  width: 100%;
  padding: 3.1rem 5.6rem 4.8rem;

  grid-area: content;

  @media (min-width: 900px) {
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
  }
`;