import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 1.5rem;
  }
`;

export const Content = styled.main`
  width: 100%;

  .section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4.8rem;
  }
`;