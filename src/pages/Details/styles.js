import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .counter {
    padding: 4.8rem 5.6rem 5.4rem;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 2.2rem;
      font-weight: 700;
    }

    svg {
      height: 2.7rem;
      width: 2.7rem;
    }
    
    button {
      border-radius: .3rem;
      padding: 1rem 4.4rem;
      font-size: .9rem;
      line-height: 1.6rem;
    }
  }
`;