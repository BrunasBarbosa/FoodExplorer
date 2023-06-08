import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .section {
    display: flex;
    padding-left: 2.4rem;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4.8rem;

    @media (min-width: 900px) {
      padding-inline: clamp(2.4rem, 1.8rem + 7vw, 12.4rem);
    }
  }
`;
