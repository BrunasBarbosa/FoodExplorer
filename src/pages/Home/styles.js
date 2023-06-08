import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 1.5rem;
  }
`;

export const Content = styled.main`
  width: 100%;

  button {
    padding: .4rem 5.9rem;
  }
  
  .section {
    display: flex;
    padding-left: 2.4rem;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4.8rem;

    @media (min-width: 900px) {
      padding-inline: clamp(2.4rem, 1.8rem + 7vw, 12.4rem);
    }
  }

`;