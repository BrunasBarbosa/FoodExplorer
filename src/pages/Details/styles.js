import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  
  
`;

export const Content = styled.main`
  width: 100%;
  padding: 3.1rem 5.6rem 4.8rem;

  .counter {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2.2rem;
      font-weight: 700;
    }

    button {
      border-radius: .3rem;
      padding: 1rem 4rem 1rem 6.8rem;
      font-size: .9rem;
      line-height: 1.6rem;
    }
  }
`;