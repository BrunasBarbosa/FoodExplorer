import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width:32rem;
    padding: 1.6rem 2.6rem;
  }

  div {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem; 
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 4.8rem;

  h1 {
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 3.7rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  > svg {
    width: 1.8rem;
    height: 1.4rem;
  }
`;
