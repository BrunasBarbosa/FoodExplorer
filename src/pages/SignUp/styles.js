import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  
  padding: clamp(4.5rem, 2rem + 10vw, 32.8rem);
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    > div {
      justify-content: center;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 3.2rem;

    form {
      padding: 6.4rem ;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 1.6rem;

      h1 {
        visibility: visible;
      }
    }
  }

  @media (min-width: 1600px) {
    padding: 44rem;
  }
`;

export const Form = styled.form`
  width: clamp(22rem, 10rem + 50vw, 80.2rem);
  gap: 3.2rem;  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  h1 {
    font-size: 3.2rem;
    line-height: 4.4rem;
    font-weight: 500;
    text-align: center;
    visibility: hidden;
  }
`;
