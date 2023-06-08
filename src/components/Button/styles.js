import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 3.2rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.RED_400};

  border-radius: .5rem;
  border: none;

  svg {
    z-index: 1;
    position: absolute;
    left: 5rem;
  }
`;