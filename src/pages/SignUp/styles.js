import styled from 'styled-components';

export const Container = styled.div`
    padding: 15.8rem 4.7rem 0 6.5rem;

  height: 100vh;
  display: flex;
  gap: 7.3rem;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  gap: 3.2rem;  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  width: 100%;
  
  * {
    font-family: var(--font-secondary);
  }

  display: flex;
  flex-direction: column;
  gap: .8rem;

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.6rem;
  }

  input {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
