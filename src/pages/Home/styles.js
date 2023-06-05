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
    padding-inline: clamp(2.4rem, 1.8rem + 7vw, 12.4rem);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4.8rem;
  }
`;