import styled from 'styled-components';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: var(--font-secondary);
  font-size: 1.4rem;
  font-weight: 500;
  background: none;
  border: none;
`;