import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  
`;

export const Main = styled.main`
  width: 100%;
  padding: 1rem 3.2rem 5.3rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    gap: 1.6rem;
  }

  div:first-child {
    font-size: 1.6rem;
    gap: .4rem;
    
    svg {
      height: 1.6rem;
      width: 1.6rem;
    }
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
    overflow-y: auto;
    width: 100%;
    height: 4.8rem;
    
    padding: .8rem;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  input {
    /* background-color: ${({ theme }) => theme.COLORS.DARK_800}; */
  }

  .submit {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  }
`;
