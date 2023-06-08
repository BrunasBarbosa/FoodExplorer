import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-size: 2.4rem;

  display: flex;
  align-items: center;
  gap: .6rem;

  svg {
    height: 2.2rem;
    width: 2.2rem;
  }

  @media (min-width: 900px) {
    font-weight: 700;
  }
`;