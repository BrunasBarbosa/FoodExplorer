import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: hidden;
  overflow-x: auto;

  h3 {
    line-height: 2.5rem;
    font-size: clamp(1.8rem, .5rem + 2vw, 3.2rem);
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }
`;