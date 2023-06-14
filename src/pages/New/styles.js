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
`;

export const Main = styled.main`
  width: 100%;
  padding: 1rem 3.2rem 5.3rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
  
  .return {
    gap: .4rem;
  }
  
  .input-form {
    gap: 1.6rem;
  }

  section,
  .input-tags {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  
  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin: 0 0 1.2rem .3rem;
  }

  label:nth-child(2) {
    font-family: var(--font-main);
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  label {
    font-size: 1.6rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .tags {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    flex-wrap: wrap;
    height: 4.8rem;
    
    padding: .8rem;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }

    * input {
      background-color: transparent;
    }
  }

  .submit {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  }

  @media (min-width: 900px) {
    padding-inline: clamp(12.3rem, 2rem + 8vw, 40rem);
    gap: 3.2rem;
    display: grid;
    
    section {
      display: grid;
      grid-template-columns: 1fr 3fr 2fr;
      gap: 3.2rem;
    }

    .large-section {
      grid-template-columns: 3fr 1fr;
    }

    .submit {
      justify-self: end;
      padding: 1.2rem 2.4rem;
      max-width: 17.2rem;
    }
  }
`;
