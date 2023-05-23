import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 3.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: var(--font-secondary);
  font-size: 1.4rem;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.RED_400};

  border-radius: .5rem;
  border: none;
`;