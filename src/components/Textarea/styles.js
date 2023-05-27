import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  padding: 1.4rem;

  font-family: var(--font-secondary);

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.DARK_500};
`;