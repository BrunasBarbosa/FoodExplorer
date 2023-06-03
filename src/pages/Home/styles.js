import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 1.5rem;
  }

  .slogan {
    padding: 0 1.6rem 0 3.2rem;
    margin-bottom: 6.2rem;
  }

  @media (min-width: 900px) {
    header {
      margin-bottom: 2.6rem;
    }
    
    .slogan {
      padding-top: 7.6rem;
      padding-inline: clamp(6rem, 1rem + 8vw, 12.4rem);
      
      * {
        font-weight: 500;
      }

      > div {
        border-radius: .8rem;
        justify-content: center;
      }

      img {
        width: clamp(20rem, 4rem + 45vw, 63.2rem);
        margin-left: 5.4rem;
      }


      p {
        font-family: var(--font-secondary);
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
`;